import {Inject, Injectable} from '@nestjs/common';
import { PubSubService } from 'src/pubsub/pubsub.service';
import {Model} from "mongoose";
import {TraceDocument} from "./schema/trace.schema";
import {OverviewModelObjectType} from "./model/overview.model";

@Injectable()
export class TraceService {
  constructor(
    @Inject('MONGODB_CONNECTION_TraceRepository')
    private traceModel: Model<TraceDocument>,
    private readonly pubsub: PubSubService,
  ) {}
  async getTraceOverview(): Promise<OverviewModelObjectType> {
    const mapFn = res=>res.map(i=>({key:i._id||'',value:i.num}))
    const browserAgg = await this.traceModel.aggregate([
      {$group : {_id : "$contexts.browser.name", num : {$sum : 1}}},
    ]).then(mapFn)
    const osAgg = await this.traceModel.aggregate([
      {$group : {_id : "$contexts.os.name", num : {$sum : 1}}},
    ]).then(mapFn)
    const usernameAgg = await this.traceModel.aggregate([
      {$unwind:"$tags"},
      {$match: { 'tags.key' : 'username' }},
      {$group:{_id:"$tags.value",num:{$sum:1}}}
    ]).then(mapFn)

    const urlAgg = await this.traceModel.aggregate([
      {$unwind:"$tags"},
      {$match: { 'tags.key' : 'url' }},
      {$group:{_id:"$tags.value",num:{$sum:1}}}
    ]).then(mapFn)

    return {
      os:osAgg,
      browser:browserAgg,
      user:usernameAgg,
      url:urlAgg
    }
  }

  async reportTraceData(obj): Promise<any> {
    return this.traceModel.create(obj).then(res=>{
      return res
    });
  }
}

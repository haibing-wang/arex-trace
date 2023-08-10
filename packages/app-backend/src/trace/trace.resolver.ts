import {
  Resolver,
  Mutation,
  Args,
  Query, Context,
} from '@nestjs/graphql';
import { PubSubService } from 'src/pubsub/pubsub.service';
import { TraceService } from './trace.service';
import {TraceObjectType} from "./model/trace.model";
import {getPlatformInfo} from "../utils";
import {OverviewModelObjectType} from "./model/overview.model";

@Resolver(() => 'Trace')
export class TraceResolver {
  constructor(
    private readonly traceService: TraceService,
    private readonly pubsub: PubSubService,
  ) {}

  @Query(() => OverviewModelObjectType, {
    description: '获取概览数据',
  })
  getTraceOverview(): Promise<OverviewModelObjectType> {
    return this.traceService.getTraceOverview();
  }

  // Mutation
  @Mutation(() => TraceObjectType, {
    description: '上报trace数据',
  })
  async reportTraceData(
    @Args({ name: 'data', description: 'trace tag数据' })
      data: string,
    @Context() context
  ): Promise<TraceObjectType> {
    let obj:any = {}
let info =   getPlatformInfo(context.req.headers['user-agent'])
    obj.tags = JSON.parse(data)
    obj.contexts = {
      browser:{
        name: info.name,
        type: 'browser',
        version: info.version
      },
      os:{
        name: info.os.family,
        type: 'os',
        version: info.os.version
      }
    }
    obj.ip = context.req.clientIp
    return this.traceService.reportTraceData(obj)
  }
}

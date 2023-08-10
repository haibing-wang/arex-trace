import { Module } from '@nestjs/common';
import { TraceService } from './trace.service';
import { TraceResolver } from './trace.resolver';
import { PubSubModule } from 'src/pubsub/pubsub.module';
import {DatabaseModule} from "../database/database.module";
import {traceProviders} from "./trace.providers";
@Module({
  imports: [DatabaseModule,PubSubModule],
  providers: [TraceResolver, TraceService,...traceProviders],
  exports: [TraceService],
})
export class TraceModule {}

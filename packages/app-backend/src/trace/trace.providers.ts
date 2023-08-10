import { Connection as MongoConnection } from 'mongoose';
import { TraceSchema } from './schema/trace.schema';
export const traceProviders = [
  {
    provide: 'MONGODB_CONNECTION_TraceRepository',
    useFactory: (connection: MongoConnection) =>
      connection.model('trace_model', TraceSchema, 'Trace'),
    inject: ['MONGODB_CONNECTION'],
  }
];

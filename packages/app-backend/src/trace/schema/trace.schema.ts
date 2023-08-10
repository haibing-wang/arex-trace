import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type TraceDocument = Trace & Document;

class Tag {
  key: string
  value: string
}

class Contexts {
  browser: BaseType
  os: BaseType
}

class BaseType {
  name: string
  type: string
  version: string
}

@Schema()
export class Trace {
  @Prop()
  tags: Tag[];
  @Prop()
  contexts: Contexts
  @Prop()
  ip:string
}

export const TraceSchema = SchemaFactory.createForClass(Trace);

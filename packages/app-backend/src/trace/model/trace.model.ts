import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class BaseType {
  @Field(() => String, {
    description: 'name',
  })
  name: string;

  @Field(() => String, {
    description: 'type',
  })
  type: string;

  @Field(() => String, {
    description: 'version',
  })
  version: string;
}

@ObjectType()
export class TagObjectType {
  @Field(() => String, {
    description: 'name',
  })
  name: string;

  @Field(() => String, {
    description: 'value',
  })
  value: string;
}
@ObjectType()
export class ContextsObjectType {
  @Field(() => BaseType, {
    description: 'browser',
  })
  browser: BaseType;

  @Field(() => BaseType, {
    description: 'os',
  })
  os: BaseType;
}


@ObjectType()
export class TraceObjectType {
  @Field(() => ID, {
    description: 'id',
  })
  id: string;

  @Field(() => [TagObjectType], {
    description: '标签',
  })
  tags: TagObjectType[];

  @Field(() => String, {
    description: 'ip',
  })
  ip: string;

  @Field(() => ContextsObjectType, {
    description: 'contexts',
  })
  contexts: ContextsObjectType;
}

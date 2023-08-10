import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class KeyValueObjectType {
  @Field(() => String, {
    description: 'key',
  })
  key: string;

  @Field(() => String, {
    description: 'value',
  })
  value: string;
}


@ObjectType()
export class OverviewModelObjectType {
  @Field(() => [KeyValueObjectType], {
    description: 'os概览',
  })
  os: KeyValueObjectType[];

  @Field(() => [KeyValueObjectType], {
    description: 'browser概览',
  })
  browser: KeyValueObjectType[];


  @Field(() => [KeyValueObjectType], {
    description: 'url概览',
  })
  url: KeyValueObjectType[];

  @Field(() => [KeyValueObjectType], {
    description: 'user概览',
  })
  user: KeyValueObjectType[];
}

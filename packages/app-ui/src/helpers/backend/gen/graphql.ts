/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BaseType = {
  __typename?: 'BaseType';
  /** name */
  name: Scalars['String']['output'];
  /** type */
  type: Scalars['String']['output'];
  /** version */
  version: Scalars['String']['output'];
};

export type ContextsObjectType = {
  __typename?: 'ContextsObjectType';
  /** browser */
  browser: BaseType;
  /** os */
  os: BaseType;
};

export type KeyValueObjectType = {
  __typename?: 'KeyValueObjectType';
  /** key */
  key: Scalars['String']['output'];
  /** value */
  value: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 上报trace数据 */
  reportTraceData: TraceObjectType;
};


export type MutationReportTraceDataArgs = {
  data: Scalars['String']['input'];
};

export type OverviewModelObjectType = {
  __typename?: 'OverviewModelObjectType';
  /** browser概览 */
  browser: Array<KeyValueObjectType>;
  /** os概览 */
  os: Array<KeyValueObjectType>;
  /** url概览 */
  url: Array<KeyValueObjectType>;
  /** user概览 */
  user: Array<KeyValueObjectType>;
};

export type Query = {
  __typename?: 'Query';
  /** 获取概览数据 */
  getTraceOverview: OverviewModelObjectType;
};

export type TagObjectType = {
  __typename?: 'TagObjectType';
  /** name */
  name: Scalars['String']['output'];
  /** value */
  value: Scalars['String']['output'];
};

export type TraceObjectType = {
  __typename?: 'TraceObjectType';
  /** contexts */
  contexts: ContextsObjectType;
  /** id */
  id: Scalars['ID']['output'];
  /** ip */
  ip: Scalars['String']['output'];
  /** 标签 */
  tags: Array<TagObjectType>;
};

export type GetTraceOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTraceOverviewQuery = { __typename?: 'Query', getTraceOverview: { __typename?: 'OverviewModelObjectType', os: Array<{ __typename?: 'KeyValueObjectType', key: string, value: string }>, browser: Array<{ __typename?: 'KeyValueObjectType', key: string, value: string }>, url: Array<{ __typename?: 'KeyValueObjectType', key: string, value: string }>, user: Array<{ __typename?: 'KeyValueObjectType', key: string, value: string }> } };


export const GetTraceOverviewDocument = {"__meta__":{"hash":"ad7b233bc6af20b25de3fdd9d104f73a2d408fe8"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTraceOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTraceOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"os"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"browser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTraceOverviewQuery, GetTraceOverviewQueryVariables>;
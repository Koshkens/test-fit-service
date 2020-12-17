import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from './context';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  city: City;
  citys: Array<Maybe<City>>;
  stationsOfCity: Array<Maybe<Station>>;
};


export type QueryCityArgs = {
  cityId: Scalars['String'];
};


export type QueryStationsOfCityArgs = {
  cityId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: City;
  createStation: Station;
};


export type MutationCreateCityArgs = {
  data: CreateCityInput;
};


export type MutationCreateStationArgs = {
  data: CreateStationInput;
  cityId: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  stations?: Maybe<Array<Maybe<Station>>>;
};

export type Station = {
  __typename?: 'Station';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
};

export type CreateStationInput = {
  name: Scalars['String'];
};

export type CreateCityInput = {
  name: Scalars['String'];
  phone: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  City: ResolverTypeWrapper<City>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Station: ResolverTypeWrapper<Station>;
  CreateStationInput: CreateStationInput;
  CreateCityInput: CreateCityInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Mutation: {};
  City: City;
  ID: Scalars['ID'];
  Station: Station;
  CreateStationInput: CreateStationInput;
  CreateCityInput: CreateCityInput;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType, RequireFields<QueryCityArgs, 'cityId'>>;
  citys?: Resolver<Array<Maybe<ResolversTypes['City']>>, ParentType, ContextType>;
  stationsOfCity?: Resolver<Array<Maybe<ResolversTypes['Station']>>, ParentType, ContextType, RequireFields<QueryStationsOfCityArgs, 'cityId'>>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCity?: Resolver<ResolversTypes['City'], ParentType, ContextType, RequireFields<MutationCreateCityArgs, 'data'>>;
  createStation?: Resolver<ResolversTypes['Station'], ParentType, ContextType, RequireFields<MutationCreateStationArgs, 'data' | 'cityId'>>;
};

export type CityResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Station']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Station'] = ResolversParentTypes['Station']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContext> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Station?: StationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;



export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;
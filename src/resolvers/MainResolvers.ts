import { Resolvers} from './resolvers-types/resolvers-types'
import {Query} from './Query'
import {Mutation} from './Mutation'
import {City} from './City'
import {Station} from './Station'

export const resolvers: Resolvers =  {
    Query,
    Mutation,
    Station,
    City,
}
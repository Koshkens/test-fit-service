import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import {resolvers} from './resolvers/MainResolvers'

const prisma = new PrismaClient()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers:resolvers,
  context: request => ({
    ...request,
    prisma,
  })
})

export {
  server,
  prisma
}

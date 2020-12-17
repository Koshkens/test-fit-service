import {QueryResolvers,ResolverTypeWrapper} from './resolvers-types/resolvers-types'



export const Query:QueryResolvers = {
    city: (parent, {cityId}, {prisma}, info) => {
        return prisma.city.findUnique({where:{id:cityId}})
    },
    citys: (parent, {}, {prisma}, info) => {
        return prisma.city.findMany()
    },
    stationsOfCity: (parent, {cityId}, {prisma}, info) => {
        return prisma.station.findMany({where:{cityId}})
    },
}
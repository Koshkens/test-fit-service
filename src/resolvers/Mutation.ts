import {MutationResolvers} from './resolvers-types/resolvers-types'


export const Mutation:MutationResolvers = {
    createCity: (parent, {data}, {prisma}, info) => {
        return prisma.city.create({data})
    },
    createStation: (parent, {data,cityId}, {prisma}, info) => {
        return prisma.station.create({data:{
            ...data,
            City:{connect:{id:cityId}}
        }})
    },
}
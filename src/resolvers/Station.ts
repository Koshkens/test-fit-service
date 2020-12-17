import { StationResolvers } from './resolvers-types/resolvers-types'


export const Station:StationResolvers = {
    city: ({id}, args, {prisma}, info) => {
        return prisma.station.findUnique({where:{id}}).City()
    }
}

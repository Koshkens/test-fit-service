import { CityResolvers } from './resolvers-types/resolvers-types'


export const City:CityResolvers = {
    stations: async ({id}, args, {prisma}, info) => {
        const stations = await prisma.city.findUnique({where:{id}}).stations()
        if(stations){
            return stations
        }else{
            return []
        }
    }
}

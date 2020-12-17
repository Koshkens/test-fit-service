import {server} from './server'

server.options.endpoint = '/graphql'
server.options.playground = '/graphql'
server.options.port = 3131
server.options.cors = {
    credentials: true,
    origin:true
}

server.start(({port,endpoint,playground})=>{
    console.log(`Server start, playground ans api: localhost:${port}${endpoint}`);
}).catch((e)=>{
    console.log(e);
})
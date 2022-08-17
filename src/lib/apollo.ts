import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6xn8ybr069101t8dtxaa92z/master',
    cache: new InMemoryCache()
})

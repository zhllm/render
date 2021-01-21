import {
    loadFilesSync,
    makeExecutableSchema, mergeResolvers, mergeTypeDefs
} from 'graphql-tools'

const typeDefs = mergeTypeDefs(loadFilesSync('./typeDefs'), { all: true })

const resolvers = mergeResolvers(loadFilesSync('./resolvers'))

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
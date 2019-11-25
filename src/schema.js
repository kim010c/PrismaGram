// Types와 Resolvers를 모아둔 js 파일
import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { Resolver } from "dns";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
// api폴더에 ** = 모든 폴더 , *.graphql graphql 로 끝나는 확장자 모두를 불러온다
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));
// api파일안에 Resolver가 아닌 파일이있을경우 에러 발생

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;

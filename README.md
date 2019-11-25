# prismagram

Instagram clone with Express + Prisma + React and React Native

# SetUp

. GraphQL SetUp

- yarn add graphql-yoga
- yarn add nodemon -D (src/server.js에 있는 코드를 실행하는 script를 작성하는데 nodemon이 필요)
- package.json에 스크립트에 추가 dev 명령어("dev": "nodemon -- exec babel-node src/server.js") //설치 필요없음
- yarn add babel-cli -D
- yarn add dotenv
- yarn add @babel/{node,preset-env,core}
- yarn remove babel-cli

-- 추가 --

- yarn add graphql-tools merge-graphql-schemas

. 미들웨어

- yarn add morgan

# 기타

- nodemon은 파일을 저장할떄마다 실행을 새로 해주는 도구 서버를 껐다가 켤 필요가 없음

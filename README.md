# prismagram

Instagram clone with Express + Prisma + React and React Native

# SetUp

1. GraphQL SetUp

- yarn add graphql-yoga : 전기능 GraphQL 서버
- yarn add nodemon -D : src/server.js에 있는 코드를 실행하는 script를 작성하는데 nodemon이 필요
- package.json에 스크립트에 추가 dev 명령어("dev": "nodemon -- exec babel-node src/server.js") //설치 필요없음
- yarn add babel-cli -D
- yarn add @babel/{node,preset-env,core}
- yarn remove babel-cli
- yarn add graphql-tools merge-graphql-schemas
- graphql-tools : JavaScript GraphQL schema를 만들기 위한 패키지
- merge-graphql-schemas : schema를 구성할 query와 resolver를 합치기 위한 패키지

2. dotenv Setup

- yarn add dotenv (포트나 DB같은 정보를 저장할 환경변수 파일을 "외부"에 만들고 관리하려고 쓰게되는데 그 .env 파일을 읽기 위해 필요함)
- dotenv는 같은 폴더에 있는 .env를 바라봄

3. Prisma

- npm install -g prisma
- yarn prisma login -k [key]로 로그인 해주면 웹에서 로그인 인증이 완료됨
- yarn prisma init 으로 설정하고
- yarn prisma deploy (prisma 서버에서 연결된 데이터베이스로 알아서 마이그레이션을 진행해 주게 된다.)

타입 정의에서 느낌표가 붙는 것은 해당 필드가 null이 될 수 없다는 의미입니다.

- ./generated/prisma-client/ 경로의 index와 prisma-schema파일을 통해 prisma와 정보를 주고받게됨

4. 미들웨어

- yarn add morgan
- 콘솔에 log를 찍어줌
- morgan이 지원하는 로그 포맷에는 'default', 'short', 'tiny', 'dev'가 있으며, 파일로 로그를 저장하려면 다음과 같이 입력한다:

5. 메일전송

- yarn add nodemailer
- yarn add nodemailer-sendgrid-transport

6. 토큰생성(passport)

- yarn add passport-jwt passport
- passport는 인증 관련한 모든 일을 함 jwt토큰이나 쿠키에서 정보를 가져와 사용자에 저장
  토큰정보를 가져와 request에 붙여줌, 토큰을 가져와서 해독한 후에 사용자 객체를 request함
- yarn add jsonwebtoken : https://www.npmjs.com/package/jsonwebtoken

# 기타

1. nodemon

- nodemon은 파일을 저장할떄마다 실행을 새로 해주는 도구 서버를 껐다가 켤 필요가 없음

2. Random Keygen

- https://randomkeygen.com/
- 서명 등에 사용할 키조합을 랜덤으로 생성해주는 사이트 => CodeIgniter Encryption Keys 부분 키로 하는 가져오는 편

# Deploy

1.  "build": "babel src -d build" 빌드 폴더 생성 (babel/cli 설치 필요)
2.  @babel/plugin-transform-runtime -D(개발자용)
3.  cd src && npx copy api/\*_/_.graphql ../build/

- 현재 개발 폴더에 graphql 확장자를 build 폴더로 카피하는 명령어

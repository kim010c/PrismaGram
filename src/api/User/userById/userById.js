import { prisma } from "../../../../generated/prisma-client";
export default {
  Query: {
    userById: (_, args) => {
      const { id } = args;
      return prisma.user({ id }).$fragment();
      //$fragment 데이터 호출 무한반복 금지 ex) user > post > user > post
    }
  }
};

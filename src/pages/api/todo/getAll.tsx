/**
 * 查询所有的代办事项列表
 */
import { okRes, errRes } from "~/utils/restful";
import prismaClient from "~/utils/dbIns";

export default async function handler(req: any, res: any) {
  const { userId } = req.body;
  
  if (!userId) { return errRes(res, "请先登录"); }

  try {
    const datas = await prismaClient.todo.findMany({
      where: {
        userId,
      },
    });
    okRes(res, datas);
  } catch (err) {
    errRes(res, err);
  }
};
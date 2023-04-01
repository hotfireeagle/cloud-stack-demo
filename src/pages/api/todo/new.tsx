/**
 * 新增一个代办事项
 */
import { okRes, errRes } from "~/utils/restful";
import prisma from "~/utils/dbIns";

export default async function handler(req: any, res: any) {
  const { content, status, userId } = req.body;

  if (!content) { return errRes(res, "缺少内容"); }
  if (status == undefined) { return errRes(res, "缺少状态"); }
  if (!userId) { return errRes(res, "请先登录"); }

  try {
    const user = await prisma.todo.create({
      data: {
        content,
        status,
        userId,
      },
    });
    okRes(res, user);
  } catch (err) {
    errRes(res, err);
  }
}
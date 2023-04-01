/**
 * 删除一个代办事项
 */
import { okRes, errRes } from "~/utils/restful";
import prisma from "~/utils/dbIns";

export default async function handler(req: any, res: any) {
  const { id } = req.body;

  if (!id) { return errRes(res, "缺少id"); }

  try {
    const user = await prisma.todo.delete({
      where: {
        id,
      }
    });
    okRes(res, user);
  } catch (err) {
    errRes(res, err);
  }
}
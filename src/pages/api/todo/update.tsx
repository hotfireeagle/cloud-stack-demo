/**
 * 更新代办事项
 */
import { okRes, errRes } from "~/utils/restful";
import prismaClient from "~/utils/dbIns";

export default async function handler(req: any, res: any) {
  const {
    id,
    status,
  } = req.body;

  if (!id) { return errRes(res, "id必传"); }
  if (status == undefined) { return errRes(res, "状态必传"); }

  try {
    const datas = await prismaClient.todo.update({
      where: { id },
      data: { status },
    });
    okRes(res, datas);
  } catch (err) {
    errRes(res, err);
  }
};
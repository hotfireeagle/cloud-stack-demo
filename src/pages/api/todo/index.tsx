import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default function handler(req: any, res: any) {
  res.status(200).json({ name: 'John Doe' })
}
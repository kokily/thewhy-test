import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export default async function registerAdminHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    password: string;
  };

  const { password }: RequestType = req.body;

  if (req.method === 'POST') {
    const admin = await db.admin.create({
      data: {
        password: await bcrypt.hash(password, 10),
      },
    });

    res.status(200).json(admin.id);
  } else {
    res.status(400);
  }
}

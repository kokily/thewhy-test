import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export default async function validPasswordHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    password: string;
    id: string;
  };

  const { password, id }: RequestType = req.body;

  if (req.method === 'POST') {
    const question = await db.question.findUnique({
      where: { id },
    });

    const valid = await bcrypt.compare(password, question.password);

    if (!valid) {
      throw new Error('비밀번호가 틀렸습니다.');
    }

    res.status(200).json({ message: true });
  } else {
    res.status(400);
  }
}

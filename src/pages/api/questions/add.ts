import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export default async function addQuestionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password, title, body, phone, email }: AddQuestionPayload =
    req.body;

  if (req.method === 'POST') {
    const question = await db.question.create({
      data: {
        username,
        password: await bcrypt.hash(password, 10),
        title,
        body,
        phone,
        email,
      },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}

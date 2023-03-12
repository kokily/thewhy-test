import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function addReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const body = req.body.body as string;

  if (req.method === 'PATCH') {
    const question = await db.question.update({
      where: { id },
      data: {
        reply: body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}

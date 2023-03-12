import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removeReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.question.update({
      where: { id },
      data: {
        reply: null,
        updatedAt: new Date(),
      },
    });

    res.status(200).json({ message: 'Remove OK' });
  } else {
    res.status(400);
  }
}

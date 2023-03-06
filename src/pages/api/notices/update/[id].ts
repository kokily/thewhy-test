import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function updateNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const { title, body }: AddNoticePayload = req.body;

  if (req.method === 'PUT') {
    const notice = await db.notice.update({
      where: { id: parseInt(id) },
      data: { title, body, updatedAt: new Date() },
    });

    res.status(200).json(notice);
  } else {
    res.status(400);
  }
}

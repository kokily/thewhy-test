import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function addNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, body }: AddNoticePayload = req.body;

  if (req.method === 'POST') {
    const notice = await db.notice.create({
      data: { title, body },
    });

    res.status(200).json(notice);
  } else {
    res.status(400);
  }
}

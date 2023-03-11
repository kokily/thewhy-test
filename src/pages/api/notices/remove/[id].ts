import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removeNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.notice.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Remove OK' });
  } else {
    res.status(400);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function removeStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await db.story.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Remove OK' });
  } else {
    res.status(400);
  }
}

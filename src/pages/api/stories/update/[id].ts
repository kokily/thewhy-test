import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function updateStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const { title, body, thumbnail, tags }: AddStoryPayload = req.body;

  if (req.method === 'PUT') {
    const story = await db.story.update({
      where: { id },
      data: {
        title,
        body,
        thumbnail,
        tags,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(story);
  } else {
    res.status(400);
  }
}

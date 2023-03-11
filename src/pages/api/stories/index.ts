import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listStoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const tag = req.query.tag as string;
  const cursor = (req.query.cursor as string) ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 12;

  if (req.method === 'GET') {
    let where = tag
      ? {
          title: {
            contains: title,
          },
          tags: {
            has: tag,
          },
        }
      : {
          title: {
            contains: title,
          },
        };

    const stories = await db.story.findMany({
      where,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      cursor: cursorObj,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(stories);
  } else {
    res.status(400);
  }
}

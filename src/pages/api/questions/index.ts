import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/libs/database';

export default async function listQuestionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const cursor = (req.query.cursor as string) ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 25;

  if (req.method === 'GET') {
    const questions = await db.question.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(questions);
  } else {
    res.status(400);
  }
}

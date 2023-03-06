import { Question } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import prevData from './question.json';

const db = new PrismaClient();

async function seed() {
  function getData() {
    const data: Question[] = prevData.map((data) => {
      return {
        id: data.id,
        username: data.name,
        password: data.password,
        title: data.title,
        body: data.body,
        phone: data.phone,
        email: data.email,
        reply: data.reply,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
      };
    });

    return data;
  }

  await Promise.all(
    getData().map((data) => {
      return db.question.create({ data });
    })
  );
}

seed();

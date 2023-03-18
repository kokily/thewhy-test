import type { Question } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import questionsData from './question.json';

const db = new PrismaClient();

async function seed() {
  function getQuestions() {
    const data: Question[] = questionsData.map((question) => {
      return {
        id: question.id,
        username: question.username,
        password: question.password,
        title: question.title,
        body: question.body,
        phone: question.phone,
        email: question.email,
        reply: question.reply,
        createdAt: new Date(question.createdAt),
        updatedAt: new Date(question.updatedAt),
      };
    });

    return data;
  }

  await Promise.all([
    getQuestions().map((question) => {
      return db.question.create({ data: question });
    }),
  ]);
}

seed();

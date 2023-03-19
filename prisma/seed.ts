import type { Question } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import questionsData from './question.json';

const db = new PrismaClient();

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

async function seed() {
  await Promise.all(
    getQuestions().map((data) => {
      return db.question.create({ data });
    })
  );
}

seed();

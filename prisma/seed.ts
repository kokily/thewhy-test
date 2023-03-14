import type { Question, Story } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import storiesData from './Story.json';
import questionsData from './question.json';

const db = new PrismaClient();

async function seed() {
  // Admin Create
  await db.admin.create({
    data: {
      password: await bcrypt.hash(process.env.PASSWORD, 10),
    },
  });

  // Stories Restore
  function getStories() {
    const data: Story[] = storiesData.map((story) => {
      return {
        id: story.id,
        title: story.title,
        body: story.body,
        tags: story.tags,
        thumbnail: story.thumbnail,
        createdAt: new Date(story.createdAt),
        updatedAt: new Date(story.updatedAt),
      };
    });

    return data;
  }

  // Questions Restore
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
    getStories().map((story) => {
      return db.story.create({ data: story });
    }),
    getQuestions().map((question) => {
      return db.question.create({ data: question });
    }),
  ]);
}

seed();

import { Admin } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import prevData from './Admin.json';

const db = new PrismaClient();

async function seed() {
  function getData() {
    const data: Admin[] = prevData.map((admin) => {
      return {
        id: admin.id,
        password: admin.password,
        createdAt: new Date(admin.createdAt),
      };
    });

    return data;
  }

  await Promise.all(
    getData().map((data) => {
      return db.admin.create({ data });
    })
  );
}

seed();

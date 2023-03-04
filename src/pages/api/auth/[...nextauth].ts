import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials, _) {
        const password = credentials?.password;

        if (!password) {
          throw new Error('비밀번호가 입력되지 않았습니다.');
        }

        const admin = await db.admin.findFirst();

        if (!admin) {
          throw new Error('관리자가 등록되어 있지 않습니다.');
        }

        const valid = await bcrypt.compare(password, admin.password);

        if (!valid) {
          throw new Error('비밀번호가 틀렸습니다.');
        }

        return {
          id: admin.id,
        };
      },
    }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);

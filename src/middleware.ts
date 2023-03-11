import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: true });

  if (!session) {
    return NextResponse.redirect(new URL('/thewhy', req.url));
  }
}

export const config = {
  matcher: [
    '/notices/add',
    '/api/notices/add',
    '/api/notices/remove/:path*',
    '/api/notices/update/:path*',
    '/stories/add',
    '/api/stories/add',
    '/api/stories/remove/:path*',
    '/api/stories/update/:path*',
  ],
};

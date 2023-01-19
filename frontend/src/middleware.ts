import { NextRequest, NextResponse } from 'next/server';

import AuthenticatedMiddleware from 'middlewares/AuthenticatedMiddleware';

// eslint-disable-next-line import/prefer-default-export
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;
  if (
    pathname === '/' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return response;
  }
  const authenticated = await AuthenticatedMiddleware(request);
  console.log(authenticated)
  if (!authenticated) {
    return NextResponse.redirect('http://localhost:3000/');
  }

  return response;
}

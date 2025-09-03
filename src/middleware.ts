import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If token exists, let backend verify later
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|login|register).*)",
  ],
}

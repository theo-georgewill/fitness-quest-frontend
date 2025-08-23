// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value // read JWT token from cookies

  // Paths that don’t need auth (like /login, /register, /public stuff)
  const publicPaths = ['/login', '/register']

  if (publicPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // If no token and trying to access protected page → redirect
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

// Tell Next.js which routes this middleware applies to
export const config = {
  matcher: ['/'] // protect all dashboard routes
}

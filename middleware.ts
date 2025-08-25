// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify JWT
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next(); // Continue to the page
  } catch (err) {
    // Invalid token → force logout
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*"], // protect dashboard & nested routes
};

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get user data from localStorage (we'll check this on client side)
  // For server-side protection, we need to check cookies or headers
  const authCookie = request.cookies.get("alumni-portal-auth")

  // Protected routes that require authentication
  const protectedRoutes = ["/student", "/university", "/admin"]

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // If accessing a protected route without auth, redirect to login
  if (isProtectedRoute && !authCookie) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/student/:path*", "/university/:path*", "/admin/:path*"],
}

import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { CK_USER, ROUTES } from './constants'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === ROUTES.signin

  const token = request.cookies.get(CK_USER)?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(ROUTES.default, request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(ROUTES.signin, request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/signin',
    '/signup',
    '/verifyemail'
  ]
}
import { NextResponse, NextRequest } from 'next/server'
import { CK_USER } from './constants'
import { ROUTES } from './constants/routes'
import { AppAPIInstance } from './service/api'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === ROUTES.signin
  console.log('middleware executed - ----------------------------: ', isPublicPath);

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
    // '/',
    '/profile',
    '/auth/signin',
    '/auth/signup',
    '/((?!api|_next/static|favicon.ico|assets).*)'
  ]
}
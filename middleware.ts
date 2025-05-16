import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public paths that don't require authentication
const PUBLIC_PATHS = ['/auth', '/privacy', '/_next', '/api', '/static', '/favicon.ico'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the current path is public
    const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path));

    // Always allow access to public paths
    if (isPublicPath) {
        return NextResponse.next();
    }

    // For the root path ('/'), allow access without authentication
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Check for Firebase Auth token in localStorage
    const authToken = request.cookies.get('firebaseToken');

    // If no auth token and trying to access protected route, redirect to auth
    if (!authToken && !isPublicPath) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    // If has auth token and trying to access auth page, redirect to home
    if (authToken && pathname === '/auth') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}; 
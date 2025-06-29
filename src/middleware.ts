import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();

    // 대문자 경로 처리
    if (url.pathname === '/Shorts') {
        url.pathname = '/shorts';
        return NextResponse.redirect(url);
    }
    if (url.pathname === '/Short') {
        url.pathname = '/short';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'ua'];

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const languages = new Negotiator({
        headers: { 'accept-language': acceptLanguage }
    }).languages();
    const defaultLocale = 'en';

    return match(languages, locales, defaultLocale);
};

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
};

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ]
};

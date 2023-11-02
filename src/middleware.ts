import { NextResponse } from 'next/server'
import { languages, cookieName } from './app/i18n/settings'

const fallbackLng = 'bg'; // Setting default language to Bulgarian

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: any) {
  let lng = fallbackLng; // By default, set to Bulgarian

  // Check if the URL is for an image and skip middleware
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
  if (imageExtensions.some(ext => req.nextUrl.pathname.endsWith(ext))) {
    return NextResponse.next();
  }

  // Check if there's a language set in cookies. If so, use that.
  if (req.cookies.has(cookieName)) {
    const cookieLang = req.cookies.get(cookieName).value;
    if (languages.includes(cookieLang)) {
      lng = cookieLang;
    }
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
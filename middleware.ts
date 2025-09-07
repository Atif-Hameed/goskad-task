import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  const { pathname } = req.nextUrl;

  if (maintenanceMode && !pathname.startsWith('/maintenance')) {
    const maintenanceUrl = req.nextUrl.clone();
    maintenanceUrl.pathname = '/maintenance';
    return NextResponse.redirect(maintenanceUrl);
  }

  return NextResponse.next();
}

// Optional: Only run middleware on relevant routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

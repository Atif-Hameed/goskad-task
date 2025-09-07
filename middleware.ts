import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  const url = new URL(req.url);

  if (maintenanceMode && !url.pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
} 

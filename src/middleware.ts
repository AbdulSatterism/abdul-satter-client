import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const token = request.cookies.get("accessToken")?.value;

  // Define protected routes
  const protectedRoutes = ["/register", "/dashboard"];

  // Check if the current route matches a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redirect to login if user is not authenticated
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Proceed to the next middleware or request handling
  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/dashboard/:path*"],
};

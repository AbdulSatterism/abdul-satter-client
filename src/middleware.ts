import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const token = request.cookies.get("accessToken")?.value;

  // Protected routes
  const protectedRoutes = ["/register", "/dashboard"];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // If the user is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request if the user is authenticated or the route is not protected
  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/dashboard"], // Protected routes matcher
};

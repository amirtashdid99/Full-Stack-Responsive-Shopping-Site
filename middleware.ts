import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role?.toUpperCase();
  const isAdmin = userRole === "ADMIN";

  // Protected routes that require authentication
  const protectedRoutes = ["/profile", "/checkout", "/orders", "/cart"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Admin routes
  const isAdminRoute = pathname.startsWith("/admin");

  // Redirect to login if accessing protected route without authentication
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Redirect to home if accessing admin route without admin role
  if (isAdminRoute && (!isLoggedIn || !isAdmin)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/profile/:path*", "/checkout/:path*", "/orders/:path*", "/admin/:path*", "/cart"],
};

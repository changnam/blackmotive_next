import { NextResponse } from "next/server";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

// Define an array of protected routes
const protectedRoutes = [
  "/dashboard",
  // Add more protected routes here
];

// Helper function to check if a path is protected
function isProtectedRoute(path) {
  return protectedRoutes.some((route) => path.startsWith(route));
}

export async function middleware(request) {
  const user = await getUserMeLoader();
  console.log(user, "user");
  const currentPath = request.nextUrl.pathname;

  if (isProtectedRoute(currentPath) && user.ok === false) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

// Optionally, you can add a matcher to optimize performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
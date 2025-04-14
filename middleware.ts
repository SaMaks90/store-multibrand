import { NextRequest, NextResponse } from "next/server";
import { getCurrentSession, refreshSession } from "@/src/app/lib/session";

const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/registration", "/"];

const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const { payload } = await getCurrentSession();

  await refreshSession();

  if (isProtectedRoute && !payload?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    payload?.userId &&
    !req.nextUrl.pathname.startsWith("/profile")
  ) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }

  return NextResponse.next();
};

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;

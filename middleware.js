import { clerkMiddleware  } from "@clerk/nextjs/server";

export default clerkMiddleware ({
  publicRoutes: ["/", "/products", "/contact"],
  ignoredRoutes: [],
});

export const config = {
  matcher: ["/admin/:path*"],
};

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { toast } from "./components/ui/use-toast";

export default withAuth(
  async function middleware(req) {
    if (req.nextauth?.token?.is_seller) return null;

    return NextResponse.redirect(new URL("/", req.url));
  },
  {
    callbacks: {
      authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};

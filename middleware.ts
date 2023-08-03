import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const languages = {
  en: {},
  tr: {},
  fa: {},
};

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    const lang = pathname.split("").splice(1, 2).join("");

    if (languages[lang as keyof typeof languages]) {
      if (pathname.split("").splice(3).join().startsWith("/dashboard")) {
        if (req.nextauth?.token?.is_seller) return null;

        return NextResponse.redirect(new URL("/" + lang, req.url));
      }

      return null;
    }

    return null;
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

// export const config = {
//   matcher: ["/:path*"],
// };

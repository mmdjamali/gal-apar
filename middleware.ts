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
    console.log(pathname);

    if (pathname === "/") {
      const lang = req.headers.get("accept-language")?.substring(0, 2);

      if (!lang || !languages[lang as keyof typeof languages])
        return NextResponse.redirect(new URL("/en", req.url));

      return NextResponse.redirect(new URL("/" + lang, req.url));
    }

    const lang = pathname.substring(1, 3);

    if (languages[lang as keyof typeof languages]) {
      if (pathname.substring(3).startsWith("/dashboard")) {
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

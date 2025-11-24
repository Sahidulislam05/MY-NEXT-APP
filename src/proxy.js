import { NextResponse } from "next/server";

export default function proxy(request) {
  const user = false;
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};

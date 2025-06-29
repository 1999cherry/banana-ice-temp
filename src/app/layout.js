import "./globals.css";
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
  title: "BANANA ICE",
  description: "BANANA ICE, an Asian video production company, mainly produces and uploads videos related to Korean hip-hop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
    <Analytics/>
      <body className='w-full h-dvh'
      >
        {children}
      </body>
    </html>
  );
}

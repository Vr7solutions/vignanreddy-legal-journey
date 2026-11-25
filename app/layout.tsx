
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vignanreddylegaljourney.vercel.app"),

  title: {
    default: "Vignan Reddy Legal Journey | Learn Law. Share Knowledge.",
    template: "%s | Vignan Reddy Legal Journey",
  },

  description:
    "A free learning platform for 3-Year LL.B students. Explore law notes, assignments, internal questions, landmark case laws, legal quizzes and practice tests.",

  keywords: [
    "LLB Study Materials",
    "3 Year LLB",
    "Law Notes",
    "Indian Law",
    "Legal Case Laws",
    "Law Assignments",
    "Osmania University LLB",
    "Legal Education India",
  ],

  authors: [{ name: "Vignan Reddy" }],

  verification: {
    google: "4SUbiXkDGEEVHVDyf-yPYIJ2iMaCV40pIY-2Yf5Int0",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vignan Reddy Legal Journey",
    description:
      "Learn Law. Share Knowledge. Grow Together. A free learning platform for law students.",
    url: "https://vignanreddylegaljourney.vercel.app",
    siteName: "Vignan Reddy Legal Journey",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vignan Reddy Legal Journey",
    description: "Free learning resources for LL.B students.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

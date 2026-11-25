
import type { Metadata } from "next";
import BackToTop from "@/components/back-to-top";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vignanreddylegaljourney.vercel.app"),

  title: {
    default:
      "Osmania University 3-Year LL.B Study Materials | Vignan Reddy Legal Journey",
    template: "%s | Vignan Reddy Legal Journey",
  },
  description:
    "Free study materials for Osmania University 3-Year LL.B (3YDC), 1st Year 1st Semester students. Access subject-wise notes, assignments, landmark case laws, quizzes and practice tests.",
  keywords: [
    "Osmania University 3 Year LLB",
    "OU 3YDC LLB 1st Year 1st Semester",
    "Osmania University LLB Study Materials",
    "LLB 1st Semester Notes",
    "3 Year LLB Notes",
    "Law Assignments",
    "Landmark Case Laws",
    "LLB Practice Tests",
    "Indian Law",
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
    title: "Osmania University 3-Year LL.B | Vignan Reddy Legal Journey",
    description:
      "Free learning resources for Osmania University 3YDC, 1st Year 1st Semester LL.B students.",
    url: "https://vignanreddylegaljourney.vercel.app",
    siteName: "Vignan Reddy Legal Journey",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1648,
        height: 928,
        alt: "Vignan Reddy Legal Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osmania University 3-Year LL.B | Vignan Reddy Legal Journey",
    description:
      "Free study resources for Osmania University 3YDC LL.B students.",
    images: ["/og-image.png"],
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
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

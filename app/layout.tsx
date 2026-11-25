import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Vignan Reddy Legal Journey | Learn Law. Share Knowledge.", description: "A free, student-led learning space for 3-Year LL.B students: assignments, internal questions, notes, case laws, internship resources and legal words." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>)
{
  const pathname = usePathname();
  let layout:any
  switch (pathname) {
    case '/admin':
      layout = (
        <div className="admin-layout flex">
          <aside>Admin Sidebar</aside>
          <main>{children}</main>
        </div>
      );
      break;

    default:
      layout = (
        <div className="public-layout bg-emerald-500">
          <nav>Public Navbar</nav>
          <main>{children}</main>
        </div>
      );
      break;
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav>navbar</nav>
        <aside>Dashboard Accordion</aside>
      {layout} {/* ✅ Correctly render JSX instead of a string */}
    </body>
    </html>
  );
}

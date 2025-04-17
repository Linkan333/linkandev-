import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "linkan.dev",
  description: "linkan.dev - A personal blog and portfolio website for projects and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="bg-zinc-950 text-gray-200 shadow-xl border-b border-zinc-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-white">
                  LinkanDev
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-6">
                  <Link href="/projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    Projects <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    About <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    Contact <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow bg-black text-gray-200">
          {children}
        </main>

        <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
                <p className="text-sm">Feel free to reach out!</p>
                <p className="text-sm">Email: contact@chaintask.io</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Linkan333" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} LinkanDev. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

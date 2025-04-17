import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { metadata } from "./metadata";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        
        <main className="flex-grow bg-black text-gray-200">
          {children}
        </main>

        <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
                <p className="text-sm">Feel free to reach out!</p>
                <p className="text-sm">Email: [REDACTED]</p>
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

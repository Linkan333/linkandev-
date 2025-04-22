import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex min-h-screen pt-5 px-4 md:px-8 bg-deep-dark text-gray-200 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-deep-dark animate-gradient-slow"></div>
            
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
                <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
            </div>

            {/* Left Sidebar - Profile Section */}
            <div className="relative z-10 w-full lg:w-[30%] max-w-sm">
                <div className="sticky top-5 space-y-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 group mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-spin-slow blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <Image
                            src="/static/images/pfpic.jpeg"
                            className="rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-700 object-cover w-full h-full relative"
                            alt="Profile Picture"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-mono font-bold mb-2">
                            Hello, I&apos;m Linkan<span className="text-indigo-300">333</span>
                        </h2>
                        <div className="inline-flex items-center text-gray-300 bg-zinc-900/50 px-4 py-2 rounded-full">
                            <span className="text-lg font-bold">WebDev <span className="text-indigo-300">&</span> Hacking</span>
                        </div>
                    </div>

                    <div className="backdrop-blur-sm bg-zinc-900/30 rounded-xl p-6">
                        <p className="text-gray-400">
                            Welcome to my website! I am passionate about web development and cybersecurity. I am 17 years old, live in Sweden, and currently study at a high school in Sweden. I love being creative and building things.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full lg:w-[70%] lg:pl-12">
                {/* Skills Section */}
                <div className="mb-16">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Skills & Expertise<span className="text-indigo-300">.</span></h2>
                        <p className="text-gray-400">Technologies and tools I work with</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Web Development */}
                        <div className="backdrop-blur-sm bg-zinc-900/50 rounded-xl p-6 ring-1 ring-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                                <h3 className="font-medium text-lg">Web Development</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Frontend</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">React</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Next.js</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">TypeScript</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Tailwind</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Backend</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Node.js</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">TypeScript</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cybersecurity */}
                        <div className="backdrop-blur-sm bg-zinc-900/50 rounded-xl p-6 ring-1 ring-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                                <h3 className="font-medium text-lg">Cybersecurity</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Areas</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Web Security</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">CTF</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Pentesting</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Tools</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Burp Suite</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Web-Dev Tools</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Own Tools (you can find in projects)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tools & Other */}
                        <div className="backdrop-blur-sm bg-zinc-900/50 rounded-xl p-6 ring-1 ring-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <h3 className="font-medium text-lg">Tools & Other</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Development</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Git</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">VS Code</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Docker</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-400">Soft Skills</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Problem Solving</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Fast Learner</span>
                                        <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Team Player</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Card */}
                <div className="mb-16">
                    <div className="relative p-8 backdrop-blur-sm bg-zinc-900/50 rounded-xl ring-1 ring-gray-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent rounded-xl"></div>
                        <div className="relative">
                            <h2 className="text-3xl font-bold text-white mb-4">Explore My Work</h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                                Discover my latest projects in web development and cybersecurity. From full-stack applications to CTF challenges, see how I turn ideas into reality.
                            </p>
                            <Link href="/projects" className="group inline-flex items-center gap-2 text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]">
                                Look at my projects
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2} 
                                    stroke="currentColor" 
                                    className="w-5 h-5 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
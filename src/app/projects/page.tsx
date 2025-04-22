export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen pt-5 px-4 md:px-8 bg-deep-dark text-gray-200 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-deep-dark animate-gradient-slow"></div>
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Projects<span className="text-indigo-300">.</span></h1>
                    <p className="text-gray-400 max-w-2xl">Here's a collection of my work in web development and cybersecurity. Each project represents a unique challenge and learning experience.</p>
                </div>

                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    <button className="px-4 py-2 rounded-full bg-zinc-800/50 text-gray-300 font-medium hover:bg-zinc-700/50 transition-colors">All Projects</button>
                    <button className="px-4 py-2 rounded-full bg-zinc-800/50 text-gray-300 font-medium hover:bg-zinc-700/50 transition-colors">Web Development</button>
                    <button className="px-4 py-2 rounded-full bg-zinc-800/50 text-gray-300 font-medium hover:bg-zinc-700/50 transition-colors">Cybersecurity</button>
                    <button className="px-4 py-2 rounded-full bg-zinc-800/50 text-gray-300 font-medium hover:bg-zinc-700/50 transition-colors">CTF Challenges</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* SubHawk Project Card */}
                    <div className="relative group rounded-xl overflow-hidden bg-zinc-900/50 ring-1 ring-gray-700">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Featured</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">SubHawk</h3>
                            <p className="text-gray-400 mb-4">A reconassiance tool I've built to get a deeper understanding in how subdomain and other reconassiance tools really work.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Python</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Security</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">CLI</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://github.com/Linkan333/SubHawk/tree/main" className="text-indigo-300 hover:text-indigo-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative group rounded-xl overflow-hidden bg-zinc-900/50 ring-1 ring-gray-700">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Web Dev</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">This website source</h3>
                            <p className="text-gray-400 mb-4">This is my project you are looking at right now. I've built this website using Next.js, tailwindcss & typescript</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Next.js</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Tailwindcss</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">TypeScript</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://github.com/Linkan333/linkandev-" className="text-indigo-300 hover:text-indigo-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="/" className="text-indigo-300 hover:text-indigo-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTF Write-ups Card */}
                    <div className="relative group rounded-xl overflow-hidden bg-zinc-900/50 ring-1 ring-gray-700">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Security</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Write-Ups</h3>
                            <p className="text-gray-400 mb-4">A collection of different writeups. Where I showcase different vulnerabilities and write how I got their and identified the bug.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">CTF</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Security</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Write-ups</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://medium.com/@Linkan333" className="text-indigo-300 hover:text-indigo-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative group rounded-xl overflow-hidden bg-zinc-900/50 ring-1 ring-gray-700">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-indigo-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Security</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Surveillance Camera</h3>
                            <p className="text-gray-400 mb-4">I made a surveillance camera with ML that recognizes a person and then sends a mail with "intruder-alert" since its in my room</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">TensorflowJs</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">Machine Learning</span>
                                <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-300 text-xs">HTML/CSS</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://github.com/Linkan333/surveillance_human_detecting" className="text-indigo-300 hover:text-indigo-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder cards for future projects */}
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative group rounded-xl overflow-hidden bg-zinc-900/50 ring-1 ring-gray-700">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-800/50 text-gray-500 text-xs font-medium">Coming Soon</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-500 mb-2">Future Project</h3>
                                <p className="text-gray-600 mb-4">More exciting projects coming soon. Stay tuned!</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-gray-500 text-xs">TBD</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
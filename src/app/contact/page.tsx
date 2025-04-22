export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen pt-5 px-4 md:px-8 bg-deep-dark text-gray-200 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-deep-dark animate-gradient-slow"></div>
            
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
            </div>

            {/* Content with backdrop blur for better readability */}
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch<span className="text-indigo-300">.</span></h1>
                    <p className="text-gray-400 max-w-2xl">Whether you're a potential employer looking for talent or just want to connect, I'm always open to new opportunities and conversations.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="relative backdrop-blur-sm bg-zinc-900/50 rounded-xl p-6 ring-1 ring-gray-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent rounded-xl"></div>
                            <div className="relative">
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <div className="space-y-4">
                                    {/* Email */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="shrink-0 bg-zinc-800/50 h-12 w-12 rounded-full flex items-center justify-center ring-1 ring-gray-700 group-hover:ring-indigo-500/50 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-200">Email</h3>
                                            <a href="mailto:linkan333@chaintask.io" className="text-gray-400 hover:text-indigo-300 transition-colors">linkan333@chaintask.io</a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="shrink-0 bg-zinc-800/50 h-12 w-12 rounded-full flex items-center justify-center ring-1 ring-gray-700 group-hover:ring-indigo-500/50 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-200">Location</h3>
                                            <p className="text-gray-400">Sweden</p>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="shrink-0 bg-zinc-800/50 h-12 w-12 rounded-full flex items-center justify-center ring-1 ring-gray-700 group-hover:ring-indigo-500/50 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-200">Availability</h3>
                                            <p className="text-gray-400">Open to opportunities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="relative backdrop-blur-sm bg-zinc-900/50 rounded-xl p-6 ring-1 ring-gray-700">
                            <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
                            <div className="flex gap-4">
                                <a href="https://github.com/Linkan333" className="bg-zinc-800/50 p-3 rounded-full ring-1 ring-gray-700 hover:ring-indigo-500/50 transition-all duration-300 text-indigo-300 hover:text-indigo-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/linus-nyberg-a98982346/" className="bg-zinc-800/50 p-3 rounded-full ring-1 ring-gray-700 hover:ring-indigo-500/50 transition-all duration-300 text-indigo-300 hover:text-indigo-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="https://x.com/linunybe" className="bg-zinc-800/50 p-3 rounded-full ring-1 ring-gray-700 hover:ring-indigo-500/50 transition-all duration-300 text-indigo-300 hover:text-indigo-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative backdrop-blur-sm bg-zinc-900/50 rounded-xl p-8 ring-1 ring-gray-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent rounded-xl"></div>
                        <div className="relative">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2.5 bg-zinc-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent outline-none text-gray-200"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2.5 bg-zinc-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent outline-none text-gray-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-2.5 bg-zinc-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent outline-none text-gray-200 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center items-center gap-2 text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                                >
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
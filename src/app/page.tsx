export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-5 px-4 md:px-8 bg-black text-gray-200">
            <h2 className="mb-10 text-xl font-mono font-bold">Hello, I&apos;m Linkan<span className="text-indigo-300">333</span></h2>

            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                <img
                    src="/static/images/pfpic.jpeg"
                    className="rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 object-cover w-full h-full"
                    alt="Profile Picture"
                />
            </div>

            <div className="max-w-3xl mx-auto py-8 px-4 text-center">
                <p className="text-lg text-gray-400 mb-4">
                    Welcome to my website! I am passionate about web development and cybersecurity. I am 17 years old, live in Sweden, and currently study at a high school in Sweden. I love being creative and building things.                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="flex items-center text-gray-300 bg-zinc-900/50 px-4 py-2 rounded-full">
                        <span className="text-xl font-bold">WebDev <span className="text-indigo-300">&</span> Hacking</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <p className="text-sm text-gray-400">Scroll to explore</p>
                <svg
                    className="animate-bounce mt-2 size-4 text-gray-300/70 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            <div className="w-full mb-5 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="relative h-[28rem] ring-1 ring-gray-700 flex-col items-end justify-center overflow-hidden rounded-xl bg-zinc-900 mx-auto w-full md:w-[24rem]">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-xl bg-transparent bg-[url('/static/images/card-home-coding.jpg')] bg-cover bg-center opacity-20">
                    </div>
                    <div className="relative text-center p-6 flex flex-col items-center">
                        <h2 className="mb-4 text-2xl font-medium text-white">
                            Web Development Journey
                        </h2>
                        <p className="text-sm text-gray-300">
                            I am a passionate full-stack developer with expertise in modern web technologies.
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mt-10 size-10 text-gray-300 ring-1 rounded-full p-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                            />
                        </svg>

                        <a href="#" className="mt-30 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Read more</a>
                    </div>
                </div>

                <div className="relative mb-5 h-[28rem] ring-1 ring-gray-700 flex-col items-end justify-center overflow-hidden rounded-xl bg-zinc-900 mx-auto w-full md:w-[24rem]">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-xl bg-transparent bg-[url('/static/images/card-home-hacking.jpg')] bg-cover bg-center opacity-20">
                    </div>
                    <div className="relative text-center p-6 flex flex-col items-center">
                        <h2 className="mb-4 text-2xl font-medium text-white">
                            My Hacking Journey
                        </h2>
                        <p className="text-sm text-gray-300">
                            Besides building web apps, I also enjoy hacking, primarily focusing on CTF (Capture The Flag) challenges.
                        </p>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mt-8 size-10 text-gray-300 ring-1 rounded-full p-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                        </svg>

                        <a href="#" className="mt-30 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Read more</a>
                    </div>
                </div>
            </div>
        </div >
    );
}
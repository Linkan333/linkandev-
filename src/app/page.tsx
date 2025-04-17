export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-5 bg-black text-gray-200">
            <h2>Hello, World</h2>
            
            <div className="flex flex-col md:flex-row mt-8 bg-zinc-900/50 rounded-lg shadow-xl max-w-2xl mx-auto overflow-hidden border border-zinc-800">
                <img 
                    className="object-cover w-full h-48 md:h-36 md:w-36 rounded-t-lg md:rounded-none md:rounded-s-lg" 
                    src="/static/images/coding.jpeg" 
                    alt="Coding" 
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-200">What do I do?</h5>
                    <p className="mb-3 font-normal text-sm text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus turpis. Curabitur non efficitur est, in aliquet leo. Ut a leo eget dolor imperdiet volutpat sit amet nec mauris. Quisque imperdiet congue turpis, eu maximus neque fermentum malesuada. Donec porttitor ullamcorper leo et semper. Quisque egestas mi sapien, in ultricies velit pellentesque vel. Suspendisse sodales luctus tincidunt. Phasellus posuere eleifend vestibulum. Maecenas faucibus dolor non metus iaculis, quis posuere risus placerat.
                    </p>
                </div>
            </div>

            <svg 
                className="animate-bounce mt-5 size-4 text-gray-300/70" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16" 
                fill="currentColor"
            >
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
        </div>
    );
}
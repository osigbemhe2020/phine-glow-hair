import React from 'react'
import Link from 'next/link';


const Hero = () => {
  return (
    <div id="hero" className="relative overflow-hidden md:pb-0 pb-5">
      <video
        src="/hero-bg-video.mp4"
        className="absolute w-full h-full object-cover brightness-50"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="container mx-auto max-w-6xl flex flex-col pt-30 md:justify-center md:pt-0 items-center text-center px-2 md:px-0 min-h-[70vh] md:h-screen">
        <div className="max-w-4xl flex flex-col items-center justify-center text-center space-y-5 text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Phine Glow Hair
          </h1>
          <h3 className="text-2xl md:text-4xl">Elevate Your Glow</h3>
          <h4 className="md:text-lg !text-white mb-8 md:max-w-2xl text-sm ">
            Premium human hair bundles, wigs, and closures—crafted for timeless
            elegance, natural movement, and lasting quality.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
        <Link
            href="/product-page"
            className="cursor-pointer relative group flex items-center text-white  md:border-2 border-black rounded-xl transition-all duration-600 ease-in-out hover:bg-slate-800 hover:text-white md:px-11 md:py-4 px-9 py-3.5 bg-slate-900 r"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 w-6 h-6 text-white group-hover:text-white transition-all duration-600 ease-in-out group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="ml-5 text-sm font-medium">Shop Collection</span>
          </Link>
          <Link
            href="/book-page"
            className="cursor-pointer relative group flex items-center justify-end text-black  md:border-2 border-gray-500 border-opacity-100 rounded-xl transition-all duration-600 ease-in-out hover:bg-gray-300 hover:text-black px-10 py-3.5 md:py-4 bg-white"
          >
            {/*<!-- SVG Icon for left arrow -->*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 w-6 h-6 text-black group-hover:text-black transition-all duration-600 ease-in-out group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="text-sm font-medium pl-5">Book appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
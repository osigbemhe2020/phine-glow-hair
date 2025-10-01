import React from 'react'
import Link from 'next/link'

const Section = () => {
    return (
     
     <section id="CTA" className="bg-gradient-to-br from-gray-300 to-black container px-4 py-4 mx-auto max-w-7xl mt-20">
            <div className="border-2 border-white flex flex-col md:flex-row px-4 py-10 relative">
                <div className="flex flex-col  md:space-y-7 space-y-2 md:px-5 mx-2">
                    <span className="text-black italic font-medium text-2xl font-serif">Why Phine Glow Hairs</span>
                    <span className="text-white font-bold font-sans md:text-6xl md:max-w-xl tracking-tight text-4xl mb-15 ">Longer, Thicker And Natural Looking Hairs in Seconds        
                    </span>
                    <button
                        className="cursor-pointer relative group flex items-center justify-end text-black  rounded-full transition-all duration-600 ease-in-out hover:bg-gray-300 px-10 py-3 self-start bg-white md:max-w-[180px] md:w-full">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 w-6 h-6 text-black group-hover:text-black transition-all duration-600 ease-in-out group-hover:translate-x-[50%]"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                        </svg>
                        <Link href='/product-page'><span className="text-sm font-medium pl-3">Shop Now</span></Link>
                    </button>
                </div>
                <div className="flex flex-col items-center">
                </div>
                
            </div>

        </section>
  )
}

export default Section
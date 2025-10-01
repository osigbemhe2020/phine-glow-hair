"use client"

import React from 'react'
import Link from 'next/link';
import {useState} from 'react';

const Header = () => {



const [visible , setVisible] = useState(false);

  return (
    <div>
        <header id="home" className="sticky top-0 z-50 md:border-b border-gray-100 backdrop-blur">
        <div className="container mx-auto ">
            <nav className="flex items-center justify-between p-3 md:p-4">
                <a href="#" className="items-center gap-2 font-semibold tracking-tight pl-3">
                    <span className="text-xl">Phine Glow Hair</span>
                </a>

                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/" className="text-slate-600 hover:text-slate-900 transition">Home</Link>
                    <Link href="/product-page" className="text-slate-600 hover:text-slate-900 transition">Products</Link>
                    <Link href="/contact-us" className="text-slate-600 hover:text-slate-900 transition">Contact</Link>
                    <Link href="/book-page"
                        className="md:hidden hover:bg-slate-800 transition items-center rounded-full bg-slate-900 text-white px-4 py-2 hover:scale-105">Book
                        now</Link>
                    <Link href="/book-page"
                        className="group relative md:flex justify-center items-center text-zinc-600 text-sm font-bold hidden">
                        <div
                            className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-slate-900 to-slate-900 p-2.5 rounded-full cursor-pointer duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                                fill="#ffffff">
                                <path
                                    d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33 0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z" />
                            </svg><span className="text-[0px] group-hover:text-sm duration-300 text-white">Book
                                Now</span>
                        </div>
                   </Link>

                </div>
                <button id="menu-btn" className="flex hamburger md:hidden mt-2" type="button"  onClick={() => setVisible(!visible)} >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

                <div id="menu" className={`absolute p-6 rounded-lg bg-slate-900 right-6 left-6 top-20 z-100 transition-all lg:hidden md:hidden duration-300 ${
                    visible ? "block" : "hidden"
                  }`}
                >
                    <div
                        className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white text-center">
                        <Link href="/" className="hover:text-slate-900 transition">
                                Home
                            </Link>

                            <Link href="/product-page" className="hover:text-slate-500 transition">
                                Products
                            </Link>

                            <Link href="/contact-us" className="hover:text-slate-500 transition">
                                Contact
                            </Link>

                            <div className="w-full pt-5 border-t border-gray-400 text-center"></div>

                            <Link
                                href="/book-page"
                                className="flex rounded-full bg-white text-slate-900 px-6 py-2 hover:bg-slate-200 transition w-full justify-center items-center"
                            >
                                Book Now
                            </Link>
                            </div>
                </div>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Header
import React from 'react'
import Image from "next/image";

const MainProduct = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs group  p-3 transition-colors mb-10"
      id="card"
    >
      <div className="relative w-full aspect-[4/3]">
    <Image
      src="/hair.jpeg"
      alt="Silky Straight human hair bundle from Phine Glow Hair"
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-[1.02] bg-gray-100"
      loading="lazy"
    />
  </div>

      <div className="p-4">
        <h5 className="mt-[-0.7em] font-semibold text-lg">
          Bose Quiet Comfort Ultra
        </h5>
        <p className="text-gray-600">Lorem ipsum dolor sit amet,</p>
        <button
          type="button"
          className="mt-3 border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition duration-200"
        >
          Get Now
        </button>
        
      </div>
    </div>
  );
}

export default MainProduct
import React from 'react'
import { Instagram, Twitter, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-200 mb-4">
            Seraphina Leclair
          </h1>
          <h2 className="text-xl font-semibold text-yellow-100 mb-6">Luxury & Wellness</h2>
          
          <p className="text-gray-300 mb-8 italic">
            "Join me on my journey of luxury, wellness, and sensuality."
          </p>
          
          <div className="space-y-4">
            <a
              href="http://www.instagram.com/luxwellnessbyseraphina/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <Instagram className="mr-2" />
              Follow my lifestyle on Instagram
            </a>
            
            <a
              href="https://x.com/SeraphinaLec?t=jB6S-xr8xn6ZqofZ-FdSpw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <Twitter className="mr-2" />
              Catch my latest updates on X
            </a>
            
            <a
              href="https://www.tiktok.com/@seraphineleclair?_t=8qXFGFWADuD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Discover fun and luxury on TikTok
            </a>
            
            <a
              href="https://www.fanvue.com/irresistibleseraphina"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <Heart className="mr-2" />
              Exclusive content awaits on Fanvue!
            </a>
          </div>
          
          <p className="mt-8 text-yellow-200 font-medium">
            Join me on this exquisite journey!
          </p>
        </div>
      </div>
    </div>
  )
}
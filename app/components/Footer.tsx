import { FaTelegramPlane, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">The NewsAPI</h3>
          <p>Guiding the developers towards a better NewsAPI with free tier realtime new fetching</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://t.me/MukundX" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://github.com/MukundSinghRajput" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/mukundsrajput" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Mukund All rights reserved.</p>
      </div>
    </footer>
  )
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Feed from '@/components/Feed'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import App from '../components/App'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 font-serif'>
      <SpeedInsights/>
      <title>Fashion Collection</title>
      <Navbar />
      <Feed />
      <Footer />
    </main>
  )
}

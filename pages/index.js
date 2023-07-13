import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Feed from '@/components/Feed'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Feed />
      {/* <Footer /> */}
    </main>
  )
}

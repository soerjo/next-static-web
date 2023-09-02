import About01 from '@/components/About'
import Banner01 from '@/components/Banner01'
import BottomNav from '@/components/BottomNav'
import Contact from '@/components/Contact'
import Content01 from '@/components/Content'
import Navbar01 from '@/components/Navbar01'

export default function Home() {
  return (
    <main className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Navbar01 />
      <BottomNav />
      <Banner01 />
      <About01 />
      <Content01 />
      <Contact />
    </main>

  )
}

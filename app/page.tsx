import HeroSection from '@/component/home'
import Loading from './loading'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
       <Suspense fallback={<Loading />}>
        <HeroSection />
        </Suspense>
    </div>
  )
}

import React from 'react'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'> 
      <Hero/>
      <section className='z-0 min-h-screen'></section>
    </main>
  )
}

export default Home
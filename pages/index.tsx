import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Splash from '../components/splash'
import HomeHOC from '../components/home'
import Head from 'next/head'

const Home: NextPage = () => {
  const [showSplash, setShowSplash] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 4000)
  }, [])

  return (
    <>
      <Head>
        <title>MoneyHacks - A Bitcoin-Only Hackathon</title>
        <meta name="description" content="India's first Bitcoin-Only Hackathon held virtually with it's genesis block getting mined on 15th October" />
        <link rel="preload" as="image" href="/btc-banner.webp" />
        <meta name="og:image" content="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen">
        <AnimatePresence>
          {showSplash ? 
            <motion.div
              className='absolute'
              key="splash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Splash />
            </motion.div> : 
            <motion.div
              className='absolute'
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeHOC />
            </motion.div>}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Home

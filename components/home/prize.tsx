import type { NextPage } from 'next'
import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

type PrizeProps = {
  icon: ReactNode
  name: string
  children: ReactNode
}

const Prize: NextPage<PrizeProps> = ({ icon, name, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="select-none p-4 border border-green-500 hover:bg-green-900 cursor-pointer flex flex-col justify-center rounded-lg"
    >
      <div className="text-2xl text-green-400">{icon}</div>
      <div className="mt-2 font-medium text-white underline underline-offset-4">
        {name}
      </div>
      <div className="mt-2 text-xs text-white">{children}</div>
    </motion.div>
  )
}

export default Prize

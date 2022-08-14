import type { NextPage } from 'next'
import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

type SponsorProps = {
  logo: string
  name: string
  link: string
  children?: ReactNode
}

const Sponsor: NextPage<SponsorProps> = ({ logo, name, children, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="select-none bg-slate-800 rounded-md overflow-hidden flex items-center cursor-pointer"
    >
      <picture>
        <img className='h-20' src={logo} alt={`${name}'s logo`} />
      </picture>
      <div className="py-2 px-4">
        <h5 className='text-white font-medium text-lg'>{name}</h5>
        <div className='mt-1 text-gray-300 text-xs'>{children}</div>
      </div>
    </motion.a>
  )
}

export default Sponsor

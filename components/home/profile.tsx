import type { NextPage } from 'next'

import { motion } from 'framer-motion'

type ProfileProps = {
  photo: string
  name: string
  twitter: string
}

const Profile: NextPage<ProfileProps> = ({ photo, name, twitter }) => {
  return (
    <motion.a
      href={`https://twitter.com/${twitter}`}
      target="_blank"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="select-none rounded-xl overflow-hidden text-gray-900 flex flex-col items-center bg-white"
    >
      <picture><img src={photo} /></picture>
      <div>{name}</div>
    </motion.a>
  )
}

export default Profile

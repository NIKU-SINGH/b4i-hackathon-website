import { NextPage } from 'next'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/Md'

const Footer: NextPage = () => (
  <footer className="text-white text-xs mt-8 py-4 px-2 flex flex-col space-y-1 border-t border-t-slate-500 items-center">
    <div className="font-medium mb-2">Useful Links:</div>
    <div className="text-2xl flex flex-row space-x-4 cursor-pointer">
      <Link href="">
        <FaGithub />
      </Link>
      <Link href="">
        <FaTwitter />
      </Link>
      <Link href="">
        <MdEmail />
      </Link>
    </div>
  </footer>
)

export default Footer

import { NextPage } from 'next'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Footer: NextPage = () => (
  <footer className="text-white text-xs mt-8 py-4 px-2 flex flex-col space-y-1 border-t border-t-slate-500">
    <div className="font-medium">Useful Links:</div>
    <a className="text-blue-300">Privacy Policy</a>
    <a className="text-blue-300">Terms of Service</a>
    <br />
    <div className="font-medium">Questions?</div>
    <a className="text-blue-300">Contact Us</a>
    <br />
    <div className="text-xl flex flex-row space-x-4">
      <FaGithub />
      <FaTwitter />
    </div>
  </footer>
)

export default Footer

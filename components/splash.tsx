import type { NextPage } from 'next'
import Typed from "react-typed"

const Splash: NextPage = () => {
  const headline = "this is the *genesis* block..."
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-1xl font-mono font-bold text-green-500 -mt-8">
        <Typed strings={[headline]} typeSpeed={40}></Typed>
      </h1>
    </div>
  )
}

export default Splash

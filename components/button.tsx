
import type { NextPage } from 'next'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
}

const Button: NextPage<ButtonProps> = ({ children, className = "" }) => (
  <button className={`bg-green-500 text-gray-800 font-mono font-semibold uppercase px-2 py-1 rounded-md ${className}`}>
    {children}
  </button>
)

export default Button

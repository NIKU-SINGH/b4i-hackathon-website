import type { NextPage } from 'next'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
}

const Button: NextPage<ButtonProps> = ({
  children,
  className = '',
  href = '',
}) => (
  <a
    href={href}
    className={`inline-flex bg-green-500 text-gray-800 font-mono font-semibold uppercase px-2 py-1 rounded-md justify-center items-center ${className}`}
  >
    {children}
  </a>
)

export default Button

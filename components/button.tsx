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
    href={href || undefined}
    className={`inline-flex font-mono font-semibold uppercase px-2 py-1 rounded-md justify-center items-center text-white space-x-2 cursor-pointer ${className}`}
  >
    {children}
  </a>
)

export default Button

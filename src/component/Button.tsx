import React, { ReactNode } from 'react'

type ButtonProps = {
  type?: "submit" | "button" | "reset"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode[] | ReactNode
  id?: string
  name?: string
  className?: string
}

export default ({
  type = "button",
  onClick,
  children,
  id,
  name,
  className
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} id={id} name={name} className={className}>
      {children}
    </button>
  )
}
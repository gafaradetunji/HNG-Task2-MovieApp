import React from 'react'

const Button = ({
    children,
    type,
    onClick,
    className,
    disabled,
}:{
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
}) => {
  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

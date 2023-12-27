import { ReactNode, ElementType } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T
  variant?:
    | 'startPlate'
    | 'header'
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  children?: ReactNode
  className?: string
  to?: string
}

export const Button: React.FC<ButtonProps> = ({
  as,
  variant = 'startPlate',
  disabled,
  type,
  children,
  className,
  to,
  ...rest
}) => {
  const buttonClassName = `${styles[variant]} ${className}`;

  return to ? (
    <Link href={to as string}>
      <button
        className={buttonClassName}
        disabled={disabled} 
        type={type}
        {...(rest as ButtonProps)} 
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
    className={buttonClassName}
      disabled={disabled} 
      type={type}
      {...(rest as ButtonProps)}
    >
      {children}
    </button>
  )
}
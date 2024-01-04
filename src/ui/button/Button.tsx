import { ReactNode, ElementType } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T
  variant:
    | 'startPlate'
    | 'header'
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  children: ReactNode
  className?: string
  to?: string
}

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  as,
  variant = '',
  disabled,
  type,
  children,
  className,
  to,
  ...rest
}) => {

  const buttonClasses = {
    [styles.button]: true, 
    [styles[variant]]: true, 
  }

  return to ? (
    <Link href={to as string}>
      <button
        className={cx(buttonClasses, className)}
        disabled={disabled} 
        type={type}
        {...(rest as ButtonProps)} 
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
    className={cx(buttonClasses, className)}
      disabled={disabled} 
      type={type}
      {...(rest as ButtonProps)}
    >
      {children}
    </button>
  )
}
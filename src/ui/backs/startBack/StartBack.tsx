'use client'
import React, { ReactNode } from 'react'
import styles from './startBack.module.scss'
import useViewportHeight from '@/hooks/useViewportHeight';
import classNames from 'classnames';
interface StartBackProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const StartBack: React.FC<StartBackProps> = ({children}) => {

  const viewportHeight = useViewportHeight();

  return (
    <div className={cx(styles.back)} style={{height: viewportHeight+'px'}}>
      {children}
    </div>
  )
}


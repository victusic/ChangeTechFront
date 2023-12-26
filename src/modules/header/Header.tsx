import React from 'react'
import styles from './header.module.scss';
import { useWindowResize } from '@/hooks/useWindowResize';
import { Button } from '@/ui/buttons';

const Header: React.FC = () => {

  const view = useWindowResize();
  
  return (
    view < 4 ? 
      <div className={styles.headerPlateDesktop}>
        <Button variant='header'>Как это работает</Button>
        <Button variant='header'>О нас</Button>
        <Button variant='header'>Rus</Button>
      </div>
    :
    <div></div>
  )
    
}

export default Header
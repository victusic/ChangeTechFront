import React from 'react'
import styles from './header.module.scss';
import HeaderNavigateButton from '@/ui/buttons/HeaderNavigateButton/HeaderNavigateButton';
import { useWindowResize } from '@/hooks/useWindowResize';

const Header: React.FC = () => {

  const view = useWindowResize();
  
  return (
    view < 4 ? 
      <div className={styles.headerPlateDesktop}>
        <HeaderNavigateButton>Как это работает?</HeaderNavigateButton>
        <HeaderNavigateButton>О нас</HeaderNavigateButton>
        <HeaderNavigateButton>Rus</HeaderNavigateButton>
      </div>
    :
    <div></div>
  )
    
}

export default Header
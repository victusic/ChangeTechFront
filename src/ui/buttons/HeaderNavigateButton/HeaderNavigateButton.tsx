import { ReactNode } from 'react';
import styles from './headerNavigateButton.module.scss';

interface HeaderNavigateButtonProps {
  children: ReactNode;
}

const HeaderNavigateButton: React.FC<HeaderNavigateButtonProps> = ({children}) => {
  
  return (
    <p className='cursor-pointer'>
      {children}
    </p>
  )
}

export default HeaderNavigateButton;
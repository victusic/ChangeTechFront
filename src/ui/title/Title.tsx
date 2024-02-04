import { ReactNode } from 'react';
import styles from './title.module.scss';
import classNames from 'classnames';

interface TitleProps {
  variant: 'underLogo' | 'startPlate';
  children: ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);

export const Title: React.FC<TitleProps> = ({ variant = '', children, className, ...rest }) => {
  const titleClasses = {
    [styles.title]: true,
    [styles[variant]]: true,
  };

  return (
    <p className={cx(titleClasses, className)} {...rest}>
      {children}
    </p>
  );
};

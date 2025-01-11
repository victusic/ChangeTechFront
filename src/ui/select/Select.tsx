import React, { useState, useRef } from 'react';
import styles from './select.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
interface SelectProps {
  variant: 'footer' | 'header';
  className?: string;
}

const cx = classNames.bind(styles);

export const Select: React.FC<SelectProps> = ({ variant, className }) => {
  const { locales, locale: currentLocale, pathname, query } = useRouter();
  const router = useRouter();
  const selectClasses = {
    [styles.select]: true,
    [styles[variant]]: true,
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    router.replace({ pathname, query }, undefined, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cx(selectClasses, className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cx(styles.selectPlate)}
      >
        {currentLocale && currentLocale.toUpperCase()}
        <div
          className={cx(styles.triangle)}
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }}
        />
      </div>
      {isOpen && locales && (
        <ul>
          {locales.map((locale) => (
            <li key={locale} onClick={() => handleLanguageChange(locale)}>
              {locale.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

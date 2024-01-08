import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';
import classNames from 'classnames';
import { i18n, useTranslation } from 'next-i18next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface SelectProps {
  variant:
    | 'footer'
    | 'header'
  className?: string
}

const cx = classNames.bind(styles);

const langs = ['en', 'ru', 'kz'];

export const Select: React.FC<SelectProps> = ({variant, className}) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const selectClasses = {
    [styles.select]: true, 
    [styles[variant]]: true, 
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: string) => {
    if(!i18n) return;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    Cookies.set('change-tech language', language, { expires: 30 })
    router.push(`/${language}`);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    router.push(`/${Cookies.get('change-tech language') || 'en'}`);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cx(selectClasses, className)}>
      <div onClick={() => setIsOpen(!isOpen)} className={cx(styles.selectPlate)}>
        {selectedLanguage.toUpperCase()}
        <div className={cx(styles.triangle)} style={{transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)'}}/>
      </div>
      {isOpen && (
        <ul>
          {langs.map((language) => (
            <li key={language} onClick={() => handleLanguageChange(language)} >{language.toUpperCase()}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

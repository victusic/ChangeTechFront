import React from 'react';
import styles from './telegram.module.scss';

const Telegram = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={styles.linkSvg}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H51C55.9706 0 60 4.02944 60 9V51C60 55.9706 55.9706 60 51 60H9C4.02944 60 0 55.9706 0 51V9C0 4.02944 4.02944 0 9 0ZM39.7265 48.9844L23.9062 37.3828L42.0703 21.0938C42.7734 20.2734 41.8359 20.0391 40.7812 20.625L18.5156 34.8047L8.78901 31.7578C6.79682 31.1719 6.79682 29.6484 9.25776 28.7109L46.875 14.1797C48.6328 13.3594 50.2734 14.5313 49.6875 17.1094L43.2421 47.3438C42.7734 49.4531 41.3671 50.0391 39.7265 48.9844Z"
        fill="current"
      />
    </svg>
  );
};

export default Telegram;

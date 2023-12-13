import React from 'react'
import styles from './linked.module.scss'

const Linked = () => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={styles.linkSvg}>
        <path d="M54 0H6C2.7 0 0 2.7 0 6V54C0 57.3 2.7 60 6 60H54C57.3 60 60 57.3 60 54V6C60 2.7 57.3 0 54 0ZM18.3 48H9V22.2H18.3V48ZM13.5 19.2C10.8 19.2 9 17.4 9 15C9 12.6 10.8 10.8 13.8 10.8C16.5 10.8 18.3 12.6 18.3 15C18.3 17.4 16.5 19.2 13.5 19.2ZM51 48H41.7V33.9C41.7 30 39.3 29.1 38.4 29.1C37.5 29.1 34.5 29.7 34.5 33.9C34.5 34.5 34.5 48 34.5 48H25.2V22.2H34.5V25.8C35.7 23.7 38.1 22.2 42.6 22.2C47.1 22.2 50.7 25.8 50.7 33.9L51 48Z" fill="current"/>
    </svg>
  )
}

export default Linked

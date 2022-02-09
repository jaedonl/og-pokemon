import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>OG Pokemon</h1>

        <div className={styles.round}>
        </div>
    </div>   
  )
}

export default Header
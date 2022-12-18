import React from 'react'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <span className={styles.logoText}>MyTestApp</span>
        </div>
    </div>
  )
}

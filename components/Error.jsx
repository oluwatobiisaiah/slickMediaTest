import React from 'react'
import styles from '../styles/Home.module.css'

export default function Error({error}) {
  return (
    <div className={styles.error}>
        {error}
    </div>
  )
}

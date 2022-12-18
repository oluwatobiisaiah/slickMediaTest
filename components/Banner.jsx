import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'


export default function Banner() {
  return (
    <div className={styles.banner}>
        <p className={styles.bannerText}>Watch <br/> Something <br/> Incredible </p>
    </div>
  )
}

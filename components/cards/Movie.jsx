import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'
import NoImage from './NoImage'


export default function MovieCard({movie}) {
  return (
    <Link href={"#"} className={styles.movieCard}>
      
        <Image
        priority
        src={movie.Poster !== "N/A" ?movie.Poster : "/image-not-found-icon.png"}
        width={100}
        height={100}
        alt={movie.Title}
        className={styles.movieImage}
        /> 
      
        <h2 className={styles.movieTitle}>{movie.Title}</h2>

    </Link>
  )
}

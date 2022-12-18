import React, { useContext, useEffect, useState } from 'react'
import { useSearchMovie } from '../hooks/useSearchMovie'
import styles from '../styles/Home.module.css'
import { MovieContext } from '../pages'

export default function SearchMovie() {
      const {searchString,setSearchString,setMovie,movieShow,setMovieShow,movie} = useContext(MovieContext)
    useEffect(()=>{
        useSearchMovie(searchString,setMovie,movieShow,setMovieShow)  
       console.log(searchString)
    },[searchString])
  return (
    <div className={styles.searchMovie}>
        <span className={styles.inputLabel}>Search</span>
        <input type="text" value={searchString} className={styles.input} onChange={(e)=>setSearchString(e.target.value)} />
    </div>
  )
}

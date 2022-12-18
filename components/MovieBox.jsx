import React, { useContext, useState } from 'react'
import SearchMovie from './SearchMovie'
import styles from '../styles/Home.module.css'
import Movie from './Movie'
import { MovieContext } from '../pages'
import EnterKeyword from './EnterKeyword'

export default function MovieBox() {
const {movieShow} = useContext(MovieContext)

    return (
    <div className={styles.movieBox}> 
        <SearchMovie movieShow={movieShow}/>
       {movieShow ? <Movie/>:<EnterKeyword/>}

    </div>
  )
}

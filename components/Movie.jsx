import React, { useContext } from 'react'
import { MovieContext } from '../pages'
import MovieCard from './cards/Movie'
import NoMovie from './cards/NoMovie'
import Error from './Error'
import styles from '../styles/Home.module.css'

export default function Movie() {
    const {movie} = useContext(MovieContext)
    console.log(movie)
  return (
    <div className={styles.movie}>
        {
            movie.Response == 'True' ? movie.Search.length !== 0  ? movie.Search.map((value,index)=> <MovieCard movie={value} key={index}/>) :<NoMovie/> :<Error error={movie.Error}/>
        }
    </div>
  )
}

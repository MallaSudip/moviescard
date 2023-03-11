import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
const Detail = () => {
    const {id} = useParams()
    const [currentMovieDetail,setMovieDetail] = useState([])
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e65a49b82f892b6a6ad0892040931b4`)
    .then(res => res.json())
    .then(data => {
      setMovieDetail(data)
    })
},[id])

  return (
    <>
    <h1 style={{color:"white"}}>Detail</h1>
    <div>{currentMovieDetail?currentMovieDetail
      .original_title:""}</div>
    </>
  )
}

export default Detail

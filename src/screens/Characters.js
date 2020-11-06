import Axios from 'axios'
import React, { useState, useEffect } from 'react'

const Characters = () => {
  const apiKey = 'af5148876ad16eb0ae251b0bdd626e9e'
  const hash = 'a5f1524ddac2afc2f7fdaaa7858fc511'
  const url = 'https://gateway.marvel.com/v1/public/characters?'
  const [movies, setMovies] = useState([])
  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    Axios.get(`${url}ts=1&apikey=${apiKey}&hash=${hash}`)
      .then(res => {
        setisLoaded(true)
        setMovies(res.data.data.results)
        console.log(res.data.data.results)
      })
      .catch(err => {
        alert(err)
      })
  })

  if (!isLoaded) {
    return <div className='col'>Loading...</div>
  } else {
    return (
      <div className='col'>
        {movies.map((item, index) => (
          <div className='item__movie' key={index}>
            <p> {item.id} </p>
            <p> {item.description} </p>
            <p> {item.name} </p>
          </div>
        ))}
      </div>
    )
  }
}

export default Characters

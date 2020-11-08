import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'
const Characters = props => {
  const [status, setStatus] = useState('')
  const [timeLine, setTimeLine] = useState([])
  const history = useHistory()

  useEffect(() => {
    setTimeLine(JSON.parse(localStorage.getItem('add') || '[]'))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setTimeLine([...timeLine, status])
    setStatus('')

    localStorage.setItem('add', JSON.stringify(timeLine))
  }

  const deconnexion = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <div className='col'>
      <button onClick={deconnexion}> Deconnexion </button>{' '}
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={status} onChange={e => setStatus(e.target.value)} />
        </label>
        <input type='submit' value='Envoyer' />
      </form>{' '}
      <div>
        {timeLine.map((item, index) => (
          <div key={index}> {item} </div>
        ))}
      </div>
    </div>
  )
}

export default Characters

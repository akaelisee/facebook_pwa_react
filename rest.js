import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import Acteur from '../Acteur'
import Person from '../Person'
import './index.css'
const List = () => {
  const [items, setItem] = useState([])

  useEffect(() => {
    Axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(res => {
        const items = res.data
        setItem(items)
      })
      .catch(err => {
        alert(err)
      })
  })
  return (
    <div className='list'>
      <div className='list__movie'>
        {items.map((item, index) => (
          <div className='item__movie' key={index}>
            <Avatar image={item.image} />
            <Acteur actor={item.actor} />
            <Person name={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List






import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './views/App'
import * as serviceWorker from './serviceWorker'
import { themeDark, themeLight } from './config/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
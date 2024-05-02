import { NasaApp } from './src/nasa-app'
import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Asteroids - NeoWs</h1>
    <p>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>
  </div>
  <div class="box">
  </div>
`

const element = document.querySelector('.box')

NasaApp(element)
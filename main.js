import { getCurrentDate } from './src/functions/get-current-date'
import { NasaApp } from './src/nasa-app'
import './style.css'


const date = getCurrentDate()

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Asteroids - NeoWs</h1>
    <p>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>
    <p>This API is maintained by <a href="https://github.com/SpaceRocks/">  SpaceRocks Team:David Greenfield, Arezu Sarvestani, Jason English and Peter Baunach.</a></p>
    <h3><b>NEAR-EARTH ASTEROIDS WITH DATE ${date}</b></h3>
  </div>
  
  
  <div class="box"></div>
`

const element = document.querySelector('.box')

NasaApp(element)
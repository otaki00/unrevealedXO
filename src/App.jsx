import { Route, Routes } from 'react-router-dom'
import './App.css'
import GameScene from './components/GameScene/GameScene'
import MenuScene from './components/MenuScene/MenuScene'
import { PlayersProvider } from './context/playersContext'
import useSound from 'use-sound'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { PlayEffectsProvider } from './context/PlayEffects'

function App() {

  const [play, {stop}] = useSound('/back-into-lockdown-latin-piano-misfortune-trouble-strife-171671.mp3', { volume: 0.2 })
  const [isPlaying, setIsPlaying] = useState(false)


  // play()
  const handleSound= () => {
    if (isPlaying) {
      stop()
      setIsPlaying(false)
    }else {
      play()
      setIsPlaying(true)
    }
  }

  return (
    <div className='app'>
      <PlayersProvider >
        <PlayEffectsProvider>
          <div className='sound-icon-container'>
            <h5>play music</h5>
            <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeMute} onClick={handleSound} className='volume_icon' />
          </div>
          <Routes>
            <Route path='/' element={<MenuScene />} />
            <Route path='/game' element={<GameScene />} />
          </Routes>
        </PlayEffectsProvider>
      </PlayersProvider>
    </div>
  )
}

export default App

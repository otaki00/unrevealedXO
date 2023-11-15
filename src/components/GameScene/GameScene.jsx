import React from 'react'
import PlayersFeedback from '../PlyersFeedback/PlayersFeedback'
import Board from '../Board/Board'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './GameScene.css'
import { motion } from 'framer-motion'

const GameScene = () => {
    return (
        <>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className='players-feedback'>
                <PlayersFeedback />
            </motion.div>
            <Board />
            <motion.div 
            initial={{transform: 'translateX(-100vw)'}}
            animate={{transform: 'translateX(0vw)'}}
            transition={{duration: 1}}
            className='back-btn'>
                <h5>Back To Menu</h5>
                <Link className='link' to='/'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </motion.div>
        </>
    )
}

export default GameScene

import React, { Suspense, useContext, useEffect } from 'react'
import './MenuScene.css'
import { Canvas } from '@react-three/fiber'
import { TextModel } from './Text/TextModel'
import useCheckMobile from '../../Hooks/use-checkMobile'
import { TicTacToeeModel } from './TicTacToeeModel/TicTacToeeModel'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { OrbitControls } from '@react-three/drei'
import { PlayEffectsContext } from '../../context/PlayEffects'

const MenuScene = () => {
    const isMobile = useCheckMobile()
    const { playClickEffect } = useContext(PlayEffectsContext)
    
    return (
        <div className='menu'>
            <Canvas  className='canvas'>
                <OrbitControls enableZoom={false}  />
                <ambientLight intensity={2.1}/>
                <pointLight position={[10, 15, 0]} />
                <Suspense fallback={null}>
                    <TextModel isMobile={isMobile} />
                    <TicTacToeeModel isMobile={isMobile} />
                </Suspense>
            </Canvas>
            <div className='menu-content'>
                <p>Welcome to my unique game, in this game you will play Tic-Tac-Toee but in different way</p>
                <motion.button
                    className='play-button'
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        delay: 0.1,
                        ease: "easeInOut",
                    }}
                    
                >
                    <Link className='link' onClick={playClickEffect} to='/game'>Play</Link>
                </motion.button>
            </div>
        </div>
    )
}

export default MenuScene

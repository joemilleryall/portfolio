import { Nav, Gallery, Footer, Backdrop, Modal } from './components.js'
import { motion } from 'framer-motion'
import { useState } from 'react'

// so the idea is that each one of the main componnets are single page interactive react components which do something simple but sort of clever and then there will be larger projects divke creating the blogging app and the media showcase app or maybe media showcase, or whatever it may be.

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return (
        <div className="home">
        
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 4 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.7 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.9 }}
            />
            <motion.div
                className="star"
                animate={{ 
                    y:['0vh', '-100vh'], 
                    scale: [1, 3, 1], 
                    rotate: 720,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            <Nav open={open} />
            <Gallery isOpen={isOpen} close={close} />
        </div>
    );
};
import { Nav, Gallery, Footer, Backdrop, Modal } from './components.js'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// so the idea is that each one of the main componnets are single page interactive react components which do something simple but sort of clever and then there will be larger projects divke creating the blogging app and the media showcase app or maybe media showcase, or whatever it may be.

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [floatingStars, setfloatingStars] = useState([]);

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    useEffect(()=>{
        const rotateArr = [90, 180, 270, 360, 540, 720, 900, 1080, 1240, 1460, 1680]
        const durationArr = [2, 4, 6, 8]
        const delayArr = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]

        let starsArr = [];

        for (let i = 0; i < 25; i++) {
            starsArr.push(
                <motion.div
                    className="bg-shape"
                    animate={{
                        y: ['-100vh', '-100vh'],
                        rotate: rotateArr[[Math.floor(Math.random() * rotateArr.length)]],
                        borderRadius: "100%"
                    }}
                    transition={{ duration: durationArr[[Math.floor(Math.random() * durationArr.length)]], repeat: Infinity, delay: delayArr[[Math.floor(Math.random() * delayArr.length)]] }}
                />
            )
        }
        setfloatingStars(starsArr)
    },[])


    return (
        <div className="home">

            <Nav open={open} />
            <Gallery isOpen={isOpen} close={close} />
            {floatingStars}
        </div>
    );
};
import { Nav, Gallery, Footer, Backdrop, Modal } from './components.js'
import { motion } from 'framer-motion'
import { useState } from 'react'

// so the idea is that each one of the main componnets are single page interactive react components which do something simple but sort of clever and then there will be larger projects like creating the blogging app and the media showcase app or maybe media showcase, or whatever it may be.

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return (
        <div className="home">
            <Nav open={open} />
            <Gallery isOpen={isOpen} close={close} />
        </div>
    );
};
import { Backdrop, Modal, Intro } from '../components.js'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import uniqid from 'uniqid'

export const Gallery = ({ isOpen, close }) => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className="gallery">
            {/* <div className="block-1"></div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4"></div>
            <div className="block-5"></div>
            <div className="block-6"></div> */}
            <Intro />

            <AnimatePresence>
                {isOpen && <Backdrop onClick={close}><Modal isOpen={isOpen} handleClose={close} /></Backdrop>}
            </AnimatePresence>
        </div>
    );
};
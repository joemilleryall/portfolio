import { Backdrop, Modal } from '../components.js'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import uniqid from 'uniqid'

export const Gallery = ({ isOpen, close }) => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className="gallery">
            <AnimatePresence>
                {isOpen && <Backdrop onClick={close}><Modal isOpen={isOpen} handleClose={close} /></Backdrop>}
            </AnimatePresence>
        </div>
    );
};
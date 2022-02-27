import { Backdrop, Modal } from '../components.js'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Gallery = ({ isOpen, close }) => {
    // const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="gallery">
            <motion.div className="bg "></motion.div>
            <motion.div className="bg "></motion.div>
            <motion.div className="bg "></motion.div>
            <motion.div className="bg"></motion.div>
            <AnimatePresence>
                {isOpen && <Backdrop onClick={close}><Modal isOpen={isOpen} handleClose={close} /></Backdrop>}
            </AnimatePresence>
        </div>
    );
};
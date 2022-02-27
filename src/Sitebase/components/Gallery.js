import { Backdrop, Modal } from '../components.js'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import uniqid from 'uniqid'

export const Gallery = ({ isOpen, close }) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    // const items = [
    //     {
    //         id: uniqid(),
    //         subtitle: "subtitle1",
    //         title: "title1"
    //     },
    //     {
    //         id: uniqid(),
    //         subtitle: "subtitle2",
    //         title: "title2"
    //     },
    //     {
    //         id: uniqid(),
    //         subtitle: "subtitle3",
    //         title: "title3"
    //     },
    //     {
    //         id: uniqid(),
    //         subtitle: "subtitle4",
    //         title: "title4"
    //     },
    // ]
    return (
        <div className="gallery">
            <AnimatePresence>
                {isOpen && <Backdrop onClick={close}><Modal isOpen={isOpen} handleClose={close} /></Backdrop>}
            </AnimatePresence>
        </div>
    );
};
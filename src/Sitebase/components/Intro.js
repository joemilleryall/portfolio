import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Intro = ({ isOpen, close }) => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className="intro">
            <h1>Hi, i'm Joe.</h1>
        </div>
    );
};
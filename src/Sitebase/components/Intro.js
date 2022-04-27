import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Intro = ({ isOpen, close }) => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className="intro">
            <h1>Hello!</h1>
            <ul>
                <li>I'm Joe Miller</li>
                <li>Web Developer</li>
                <li>Combat Sports Coach</li>
                <li>Based in Brooklyn</li>
            </ul>

            <p>Welcome to my site</p>
        </div>
    );
};
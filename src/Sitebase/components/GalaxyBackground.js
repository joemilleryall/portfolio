import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const GalaxyBackground = () => {
    const [floatingStars, setFloatingStars] = useState([]);

    return (
        <div className="galaxy">
            <motion.div
                className="star"
                animate={{
                    y: ['0vh', '-100vh'],
                    rotate: 720,
                    borderRadius: ["100%", "40%", "0%"]
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 0
                }}
            />
            <motion.div
                className="star"
                animate={{
                    y: ['0vh', '-100vh'],
                    rotate: 720,
                    borderRadius: ["100%", "40%", "0%"],
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 0
                }}
            />
        </div>
    );
};
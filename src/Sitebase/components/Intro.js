import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Intro = () => {
    // const [selectedId, setSelectedId] = useState(null)

    const dropDownSlideOut = {
        hidden: {
            y: "-100vh",
        },
        visible: {
            y: "0",
            transition: {
                type: "spring",
                damping: 400,
                stiffness: 5000
            },
        },
        exit: {
            x: "-100vh",
            transition: {
                duration: "0.2"
            },
        }
    }


    return (
        <div className="intro">
            <motion.div
                animate={{ x:-100, opacity: 0, transition: { delay: 2, duration: 0.5 } }}
            >
                <motion.h1
                    initial={{ x: 70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    welcome
                </motion.h1>

            </motion.div>
            <div className='container'>
                <ul>
                    <motion.li
                        className="name"
                        key="name"
                        variants={dropDownSlideOut}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        I'm Joe Miller
                    </motion.li>
                    <motion.div
                        className="body"
                        key="body"
                        variants={dropDownSlideOut}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <li>Web Developer</li>
                        <li>Combat Sports Coach</li>
                        <li>Based in Brooklyn</li>
                    </motion.div>
                </ul>
            </div>
        </div>
    );
};
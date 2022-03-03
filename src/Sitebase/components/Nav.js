import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


export const Nav = ({ open }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const slideOut = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: "0",
            transition: {
                duration: 1, 
                type: "spring", 
                damping: 50, 
                stiffness: 700
            },
        },
        exit: {
            x: "-100vw",
        }
    }

    return (
        <nav>
            <motion.button
                key="open-nav-btn"
                onClick={()=>{setIsNavOpen(true)}}
                className="open-nav"
            >
                open nav
            </motion.button>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                {
                    isNavOpen && (<motion.div
                            key="open-nav-div"
                            variants={slideOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button
                                onClick={()=>{setIsNavOpen(false)}}
                                className="close-nav"
                            >
                                X
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.7 }}
                                className="nav-btn"
                                onClick={open}
                            >
                                Open
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="nav-btn"
                                onClick={() => null}
                            >
                                Button
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="nav-btn"
                                onClick={() => null}
                            >
                                Button
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="nav-btn"
                                onClick={() => null}
                            >
                                .json?
                                {/* https://www.reddit.com/r/UkrainianConflict/new.json */}
                            </motion.button>
                        </motion.div>)
                
                }
            </AnimatePresence>

        </nav>
    );
};

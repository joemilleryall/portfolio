import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Nav = ({ open }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const slideOut = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: "0",
            transition: {
                type: "spring",
                damping: 400,
                stiffness: 5000
            },
        },
        exit: {
            x: "-100vw",
            transition: {
                duration: "0.2"
            },
        }
    }


    return (
        <nav>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                {
                    isNavOpen ? (
                        <motion.div
                            className="slideOutNav"
                            key="open-nav-div"
                            variants={slideOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button
                                onClick={() => { setIsNavOpen(false) }}
                                className="close-nav"
                                key="close-nav-btn"
                                whileHover={{ scale: 1.3, borderRadius: "100%", backgroundColor: "rgb(0, 0, 0)" }}
                                whileTap={{ scale: 0.7 }}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                &#x2936;
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
                    : (
                        <motion.div
                            key="open-nav-btn"
                            onClick={() => { setIsNavOpen(true) }}
                            className="open-nav"
                            whileHover={{ scale:1.5 }}
                            variants={slideOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            
                        >
                            <motion.div whileHover={{ scale: 1.2 }} key="top"></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} key="middle"></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} key="bottom"></motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </nav>
    );
};

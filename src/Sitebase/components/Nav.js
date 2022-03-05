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
    const fader = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: "0",
            transition: {
                duration: 1,
                type: "spring",
                damping: 50,
                stiffness: 100
            },
        },
        exit: {
            x: "-100vw",
        }
    }

    return (
        <nav>
            <motion.div
                key="open-nav-btn"
                onClick={() => { setIsNavOpen(true) }}
                className="open-nav"
                whileHover={{
                    scale:1.5,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.7 }}
            >
                <motion.div whileHover={{ scale: 1.2 }} key="top"></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} key="middle"></motion.div>
                <motion.div whileHover={{ scale: 1.2 }} key="bottom"></motion.div>

            </motion.div>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                {
                    isNavOpen && (<motion.div
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
                            whileHover={{ scale: 1.3, borderRadius: "100%", backgroundColor: "rgb(0, 0, 0)" }}
                            whileTap={{ scale: 0.7 }}
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

                }
            </AnimatePresence>

        </nav>
    );
};

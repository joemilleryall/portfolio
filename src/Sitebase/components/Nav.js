import { motion } from 'framer-motion'

export const Nav = ({ open }) => {
    return (
        <nav>
            <motion.div>
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
                    Whats going on in Ukraine
                    {/* https://www.reddit.com/r/UkrainianConflict/new.json */}
                </motion.button>
            </motion.div>
        </nav>
    );
};

import { useRef, useEffect, useState } from "react";
import { Modal } from "./Modal/Modal.js"
import { motion, AnimatePresence } from "framer-motion"

export const Bio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="bio-container">
            <motion.button
                className="port-btn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (isOpen ? close() : open())}
            >
                Test Modal
            </motion.button>

            <AnimatePresence>
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={()=> null}
                {isOpen && <Modal isOpen={isOpen} handleClose={close} text={content}/>}
            </AnimatePresence>

        </div>
    );
};


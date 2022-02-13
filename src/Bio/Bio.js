import { useRef, useEffect, useState } from "react";
import { Modal } from "./Modal/Modal.js"
import { motion } from "framer-motion"

export const Bio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);


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

            {isOpen && <Modal isOpen={isOpen} handleClose={close}/>}
        </div>
    );
};


import { useRef, useEffect, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop.js"
import { motion } from "framer-motion"

const dropIn = {
    hidden: {
        y:"-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity:1
    },
    exit: {
        y:"100vh",
        opacity: 0, 
    }
}

export const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="modal"
                variants={dropIn}
                intial="hidden"
                animate="visible"
                exit="exit"
            >
                {text}
            </motion.div>
        </Backdrop>
    );
};


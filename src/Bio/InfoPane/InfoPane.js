import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"

const dropIn = {
    hidden: {
        // y:"-100vh",
        opacity: 0,
    },
    visible: {
        // y: "0",
        opacity:1,
        transition: {
            duration:1, 
        }
    },
    exit: {
        // y:"100vh",
        opacity: 0, 
    }
}

export const InfoPane = ({ handleClose, content }) => {

    return (
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {content}
            </motion.div>
    );
};


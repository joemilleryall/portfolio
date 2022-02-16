import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"

const fader = {
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
                className="info-pane"
                variants={fader}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {content}
            </motion.div>
    );
};


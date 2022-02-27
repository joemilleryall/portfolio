import { Backdrop } from "./Backdrop";
import { motion } from "framer-motion";

export const Modal = ({ handleClose, text }) => {
    const dropIn = {
        hidden: {
            x: "-20vw",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1, 
            transition: {
                duration: 0.2, 
                type: "spring", 
                damping: 25, 
                stiffness: 500
            },
        },
        exit: {
            x: "10vw",
            opacity: 0,
        }
    }
    return (
            <motion.div
                onClick={e => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose} >Close</button>
            </motion.div>
    )
}
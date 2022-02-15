import { useRef, useEffect, useState } from "react";
import { InfoPane } from "./InfoPane/InfoPane.js"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"


export const Bio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState('background')


    // const open = () => setIsOpen(true);
    // const close = () => setIsOpen(false);

    const btnClick = (e) => {
        setIsOpen(!isOpen)
        setIsSelected(e.target.dataset.name)
    }

    const timeline = (
        <div className="timeline">
            <ul>
                <li>
                    <span className="timeline-date">2006</span>
                    <div className="timeline-point">Graduated from McFatter Technical High School</div>
                    <div className="skills-acquired"><span>+</span>HTML, CSS, PHP, FTP clients, Photoshop, Final Cut, and building gaming PCs</div>
                </li>
                <li>
                    <span className="timeline-date">2014</span>
                    {/* <div>test content for a bio point on this portfolio and more and more and more</div> */}
                    <div className="timeline-point">Graduated from Florida State University</div>
                    <div className="skills-acquired"><span>+</span>Javascript, SEO, WCAG, B.A., Editing, Writing, and Media </div>
                </li>
                <li>
                    <span className="timeline-date">2016</span>
                    <div className="timeline-point">Lived in Northern Thailand, training and competing in the combat sport of <a target="_blank" href="https://www.youtube.com/watch?v=mgbGDi_ziMA">Muay Thai</a>.</div>
                    <div className="skills-acquired"><span>+</span>Freelancing experience, sweet kicks</div>
                </li>
                {/* <li>
            <span className="timeline-date">2018</span>
            <div className="timeline-point">Moved to New York City</div>
        </li> */}
                <li>
                    <span className="timeline-date">2019</span>
                    <div className="timeline-point">Completed Flatiron School's Software Engineering program.</div>
                    <div className="skills-acquired"><span>+</span>React, Ruby on Rails, Git, REST, JSON, AJAX, Webpack, Babel, npm, PostGreSQL, MVC</div>
                </li>
                <li>
                    <span className="timeline-date">2020</span>
                    <div className="timeline-point">Hired at Weill Cornell Medicine</div>
                    <div className="skills-acquired"><span>+</span>PHP, Drupal, Gulp, Agile/Scrum, ServiceNow, Google Analytics, Quality Assurance</div>
                </li>
            </ul>
        </div>)

    const content = () => {
        if (isSelected === 'timeline') {
            return timeline
        } else if (isSelected === 'skills') {
            return "skills"
        } else if (isSelected === 'experience') {
            return "exp"
        }
    }

    return (
        <div className="bio-container">

            <motion.div
                className="port-btn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={btnClick}
                data-name="timeline"
            >
                Timeline
            </motion.div>
            <motion.div
                className="port-btn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={btnClick}
                data-name="skills"
            >
                Skills
            </motion.div>
            <motion.div
                className="port-btn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={btnClick}
                data-name="experience"
            >
                Experience
            </motion.div>


            <AnimatePresence>
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
                {isOpen && <InfoPane handleClose={close} content={content()} />}
            </AnimatePresence>

        </div>
    );
};


import { useState } from "react";

export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')
    return (
        <div className="bio-container">
            <div className="bio">
                <button className={isSelected === 'background' ? 'selected' : ''}>Background</button>
                <button className={isSelected === 'dev' ? 'selected' : ''}>Web Developer</button>
                <button className={isSelected === 'coach' ? 'selected' : ''}>Combat Sports Coach</button>
            </div>
        </div>
    );
};


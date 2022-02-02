import { useState } from "react";

export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')

    const btnClick = (e) => {
        setIsSelected(e.target.name)
    }
    
    return (
        <div className="bio-container">
            <div className="bio">
                <div className="component-nav">
                    <button onClick={btnClick} name="background" className={isSelected === 'background' ? 'selected' : ''}>Background</button>
                    <button onClick={btnClick} name="dev" className={isSelected === 'dev' ? 'selected' : ''}>Web Developer</button>
                    <button onClick={btnClick} name="coach" className={isSelected === 'coach' ? 'selected' : ''}>Combat Sports Coach</button>
                </div>

                {isSelected === 'background' 
                    ? <div>background</div>
                    : isSelected === 'dev' 
                        ? <div>dev</div>
                        : isSelected === 'coach'
                            ? <div>coach</div>
                            : <div>nothing</div>
                }

            </div>
        </div>
    );
};


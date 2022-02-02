import { useState } from "react";

export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')

    const btnClick = (e) => {
        setIsSelected(e.target.name)
    }

    const bgContent = <div>BG</div>

    const devContent = <div>dev</div>

    const coachContent = <div>coach</div>

    return (
        <div className="bio-container">
            <div className="bio">
                <div className="component-nav">
                    <button onClick={btnClick} name="background" className={isSelected === 'background' ? 'selected' : ''}>Background</button>
                    <button onClick={btnClick} name="dev" className={isSelected === 'dev' ? 'selected' : ''}>Web Developer</button>
                    <button onClick={btnClick} name="coach" className={isSelected === 'coach' ? 'selected' : ''}>Combat Sports Coach</button>
                </div>

                {isSelected === 'background'
                    ? bgContent
                    : isSelected === 'dev'
                        ? devContent
                        : isSelected === 'coach'
                            ? coachContent
                            : null
                }

            </div>
        </div>
    );
};


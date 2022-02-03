import { useState } from "react";
import florida from '../../assets/florida.png'
import nyc from '../../assets/NYC.png'
import coach from '../../assets/combat.png'



export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')

    const btnClick = (e) => {
        setIsSelected(e.target.name)
    }

    const bgContent = (
        <div className="bio-content">
            <div className="bg-body">

                <img src={florida} alt="" />

                {/* maxime mollitia molestiae quas vel repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio eaque rerum Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure earum ut molestias voluptate aliquam nihil eveniet aliquid culpa officia aut Impedit sit quaerat nesciunt ipsum debitis reprehenderit quia quo neque Ipsa eos sapiente officiis at excepturi expedita sint  */}
            </div>
        </div>
    )

    const devContent = (
        <div className="bio-content">
            <div className="dev-body">
                <img src={nyc} alt="" />
            </div>
        </div>
    )

    const coachContent = (
        <div className="bio-content">
            <div className="coach-body">
                <img src={coach} alt="" />
            </div>
        </div>
    )

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


import { useRef, useEffect, useState } from "react";

export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')
    const fadeRef = useRef();

    // useEffect(() => {
    //     fadeRef.current.animate({opacity: [0, 1]},500);
    //     fadeRef.current.style.opacity = 1;
    // }, [isSelected])
    //AOS fade ins are going backwards???? data-aos="fade-in" data-aos-duration="1800"

    const btnClick = (e) => {
        setIsSelected(e.target.name)
    }

    const bgContent = (
        <div className="bg-body opacity" ref={fadeRef}>
            <div className="timeline">
                <ul>
                    {/* <li>
                        <span>2006 - </span>
                        test content for a bio point on this portfolio
                    </li> */}
                    <li>
                        <span>2014 </span>
                        <div>test content for a bio point on this portfolio and more and more and more</div>
                    </li>
                    <li>
                        <span>2016 </span>
                        <div>test content for a bio point on this portfolio and more and more and more</div>
                    </li>
                    <li>
                        <span>2018 </span>
                        <div>test content for a bio point on this portfolio and more and more and more</div>
                    </li>
                    <li>
                        <span>2019 </span>
                        <div>test content for a bio point on this portfolio and more and more and more</div>
                    </li>
                    <li>
                        <span>2020 </span>
                        <div>test content for a bio point on this portfolio and more and more and more</div>
                    </li>
                </ul>
            </div>
        </div>
    )

    const skillsContent = (
        <div className="skills-body opacity" ref={fadeRef} >
            <div className="best">
                    <p>Front-end</p>
                <div className="icons">
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="devicon-jquery-plain-wordmark"></i>
                    <i className="devicon-html5-plain-wordmark"></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                </div>
            </div>
            <p>Back-end</p>
            <div className="icons">
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-ruby-plain-wordmark"></i>
                <i className="devicon-rails-plain-wordmark"></i>
                <i className="devicon-php-plain"></i>
            </div>
            <p>and also..</p>
            <div className="icons">
                <i className="devicon-babel-plain"></i>
                <i className="devicon-webpack-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-drupal-plain-wordmark"></i>
            </div>
            <div className="currently-learning">
                Currently expanding by:
                <i className="devicon-jest-plain"></i>
                <i className="devicon-nextjs-original"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-graphql-plain"></i>
            </div>
        </div>
    )

    const expContent = (

        <div className="exp-body opacity" ref={fadeRef}>
            coming very soon
        </div>

    )

    const projectsContent = (

        <div className="projects-body" ref={fadeRef}>
            Coming very soon
        </div>

    )

    return (
        <div className="bio-container">
            <div className="bio">
                <div className="component-nav">
                    <button onClick={btnClick} name="background" className={isSelected === 'background' ? 'selected' : ''}>Background</button>
                    <button onClick={btnClick} name="skills" className={isSelected === 'skills' ? 'selected' : ''}>Skills</button>
                    <button onClick={btnClick} name="exp" className={isSelected === 'exp' ? 'selected' : ''}>Experience</button>
                    {/* <button onClick={btnClick} name="projects" className={isSelected === 'projects' ? 'selected' : ''}>Projects</button> */}
                </div>
                <div className="bio-content">
                    {isSelected === 'background'
                        ? bgContent
                        : isSelected === 'skills'
                            ? skillsContent
                            : isSelected === 'exp'
                                ? expContent
                                : isSelected === 'projects'
                                    ? projectsContent
                                    : null
                    }
                </div>
            </div>
        </div>
    );
};


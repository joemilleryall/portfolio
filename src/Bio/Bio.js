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


    // The idea at the moment is to have this pane have the skills acquired and the bio points mostly about things not tech related be separated into tabs that combine im some way to make up this defauylt screen, to give an interactive bit to the user to choose which side of me they want to see more about other than just the bullets. 

    // so the '+ Skills acquired' bits will maybe be a different color or have some animatino on hover to make them larger or something and a way to maybe play into the skills portion? or maybe just two different blurbs on the same pane about me biuographically conditionally rendered

    const bgContent = (
        <div className="bg-body opacity" ref={fadeRef}>
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
                        <div className="timeline-point">Moved to Chiang Mai, Thailand to compete in the combat sport of <a target="_blank" href="https://www.youtube.com/watch?v=mgbGDi_ziMA">Muay Thai</a>.</div>
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
                <a className="bio-btn" target="_blank" href="https://github.com/joe-millers-code/portfolio/tree/master/src/Bio">code</a>
                <span className="display-none">this Bio Component repo</span>
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


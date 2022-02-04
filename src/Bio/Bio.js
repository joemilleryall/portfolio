import { useEffect, useState } from "react";

export const Bio = () => {
    const [isSelected, setIsSelected] = useState('background')

    useEffect(()=>{

    }, [isSelected])
    
    const btnClick = (e) => {
        setIsSelected(e.target.name)
    }

    const bgContent = (

        <div className="bg-body">

            {/* <img src={florida} alt="" /> */}

            maxime mollitia molestiae quas vel repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio eaque rerum Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure earum ut molestias voluptate aliquam nihil eveniet aliquid culpa officia aut Impedit sit quaerat nesciunt ipsum debitis reprehenderit quia quo neque Ipsa eos sapiente officiis at excepturi expedita sint 
        </div>
    )

    const skillsContent = (
        <div className="skills-body">
            <div className="best">
                <h4>Current Favorites</h4>
                <div className="icons">
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-html5-plain-wordmark"></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                    <i className="devicon-ruby-plain-wordmark"></i>
                    <i className="devicon-rails-plain-wordmark"></i>
                </div>

            </div>
            <h4>Past Favorites</h4>
            <div className="icons small-w">
                <i className="devicon-php-plain"></i>
                <i className="devicon-drupal-plain-wordmark"></i>
                <i className="devicon-postgresql-plain-wordmark"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-babel-plain"></i>
                <i className="devicon-webpack-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-sass-original"></i>
            </div>


            <div className="currently-learning">
                Currently intrigued by: 
                <i className="devicon-jest-plain"></i>
                <i className="devicon-nextjs-original"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-graphql-plain"></i>
            </div>
        </div>
    )

    const expContent = (

        <div className="exp-body">

        </div>

    )

    const projectsContent = (

        <div className="projects-body">

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


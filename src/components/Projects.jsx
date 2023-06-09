import React, { useState } from "react";
import { faSpinner, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";


export default function Projects(){
    const [isLoadingOne, setIsLoadingOne] = useState(true);
    const [isLoadingTwo, setIsLoadingTwo] = useState(true);
    const [isLoadingThree, setIsLoadingThree] = useState(true);

    function handleLoadingOne(){
        setIsLoadingOne(false)
    };

    function handleLoadingTwo(){
        setIsLoadingTwo(false)
    };

    function handleLoadingThree(){
        setIsLoadingThree(false)
    }

    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <br />
            <div className="project one">
                <h4>Greatest Sports Moments</h4>
                <p>This is an app for sports fans that allows you to create an account and contribute to a public list of great sports moments.
                    Along with the description of the moment, a user can add a youtube link to the highlight of the moment and watch the video in the 
                    app. Users can also like moments and add comments underneath each moment. 
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>MongogDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Express-Jwt</li>
                    <li>Morgan</li>
                    <li>JSON Web Token</li>
                    <li>Bcrypt</li>
                    <li>Dotenv</li>
                    <li>React</li>
                    <li>Axios</li>
                    <li>React-router-dom</li>
                    <li>React-bootstrap</li>
                    <li>React-select</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://greatestsportsmoments.onrender.com/" target="_blank">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x" className="icon" />
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/Greatest-Sports-Moments" target="_blank">
                            <FontAwesomeIcon icon={ faGithub } size="2x" className="icon" />
                        </a>
                    </p>
                </div>
                { isLoadingOne && <p style={ { fontWeight: "bold", fontSize: "1.5rem" } } className="loading">Due to Render limitations, project may take a minute to load initially<FontAwesomeIcon icon={ faSpinner } spin size="5x"/></p>}
                <iframe 
                    src="https://greatestsportsmoments.onrender.com/" 
                    height="500px" 
                    width='500px' 
                    title="Greatest Sports Moments" 
                    onLoad={ handleLoadingOne }
                />
            </div>
            <br />
            <div className="project two">
                <h4>Hiking With Dogs</h4>
                <p>This is an app for hiking enthusiasts who love to bring their furry friend with them. With this app, you will be able to view
                    a list of dog friendly hiking trails and be able to add trails of your own. You can also leave reviews of trails and view reviews
                    left by other users.
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>MongogDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Express-jwt</li>
                    <li>Morgan</li>
                    <li>JSON Web Token</li>
                    <li>Dotenv</li>
                    <li>Bcrypt</li>
                    <li>React</li>
                    <li>Axios</li>
                    <li>React-router-dom</li>
                    <li>React-bootstrap</li>
                    <li>React Carousel</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://hikingwithdogs.onrender.com/" target="_blank">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x" className="icon" />
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/Hiking-With-Dogs" target="_blank">
                            <FontAwesomeIcon icon={ faGithub } size="2x" className="icon" />
                        </a>
                    </p>
                </div>
                { isLoadingTwo && <p style={ { fontWeight: "bold", fontSize: "1.5rem" } } className="loading">Due to Render limitations, project may take a minute to load initially <FontAwesomeIcon icon={ faSpinner } spin size="5x" /></p> }
                <iframe 
                    src="https://hikingwithdogs.onrender.com/" 
                    height="500px" 
                    width="500px" 
                    title="Hiking with Dogs"
                    onLoad={ handleLoadingTwo }
                />
            </div>
            <br />
            <div className="project3">
                <h4>NHL Stats App</h4>
                <p>This is an app that allows you to view statistics from any NHL player from the 2022-2023 regular season. It also allows you to
                    view basic team info and includes a feature for comparing the statistics of two players side by side.
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>React</li>
                    <li>React-router-dom</li>
                    <li>Axios</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://nhl-stats-app.netlify.app/" target="_blank">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x" className="icon" />
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/NHL-Stats-App" target="_blank">
                            <FontAwesomeIcon icon={ faGithub } size="2x" className="icon"/>
                        </a>
                    </p>
                </div>
                { isLoadingThree && <p style={ { fontWeight: "bold", fontSize: "1.5rem" } } className="loading">Loading <FontAwesomeIcon icon={ faSpinner } spin size="5x" /></p> }
                <iframe 
                    src="https://nhl-stats-app.netlify.app/" 
                    height="500px" 
                    width="500px" 
                    title="NHL Stats App"
                    onLoad={ handleLoadingThree }
                />
            </div>
            <Contact />
        </div>
    )
}


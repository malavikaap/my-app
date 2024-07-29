import React from "react";
import profilePic from './assets/epic.jpg';
function About () {
    return (
        <div className="service">
            <h1 className="offer">Services Offering</h1><br></br>
            <ul className="list-class">
                <li>Excellent collaborative working..</li><br></br>
                <li>Educational Brilliance..</li><br></br>
                <li>Years of services..</li><br></br>
                <li>Technological experts..</li><br></br>
                <li>Financial coperation..</li><br></br>
                <li>Intership offerings..</li><br></br>
                <img className='card-images' src={profilePic} alt="profile picture" />
            </ul>
        </div>
    )
}
export default About
import React from "react";
import {NavLink} from "react-router-dom";

function HomePage() {

    return(
        
            <nav>
                <NavLink to='/'>
                    HomePage
                </NavLink>
                <NavLink to='/samplesurvey'>
                    Sample Survey
                </NavLink>
                <NavLink to='/sensorysurvey'>
                    Sensory Survey
                </NavLink>
            </nav>
        
    )

}

export default HomePage
import React from "react";

function SampleSurvey() {
return (

    <div>
        <form onSubmit={(e)=>{}}>
            <label> What is your reason for considering a survey?

            <input type= 'radio' name= 'q1' value='1'/>
            Employee Engagement
            <input type= 'radio' name= 'q1' value='2'/>
            Team Dynamics
            <input type= 'radio' name= 'q1' value='3'/>
            Student Safety
            <input type= 'radio' name= 'q1' value='4'/>
            Parent Involvement in Schooling
            </label>
            <label> Are you planning to use this tool?
            <input type= 'radio' name= 'q2' value='1'/>
            Yes
            <input type= 'radio' name= 'q2' value='-1'/>
            No
            <input type= 'radio' name= 'q2' value='0'/> 
            Don't Know
            </label>
            <label>Why or Why Not?
                <input type='text'/>
            </label>
            <label>What is your first name?
                <input type='text'/>
            </label>
            <label>What is your Email Address?
                <input type='text'/>
            </label>
            <label>Additional Feedback
                <input type='text'/>
            </label>
            <button>submit</button>
        </form>
    </div>
)
}

export default SampleSurvey
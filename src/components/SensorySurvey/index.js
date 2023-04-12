import React from "react";
import Question from "./Question";
//What if we made a factory function
//Generates a question element 


function SensorySurvey() {
    const textArray = [
        "I learn the most when the lesson engages my sense of <em>sight</em>.",
        "I learn the most when the lesson engages my sense of <em>hearing</em>.",
        "I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.",
       "I find it easiest to remember things I see rather than things I hear or do.",
       "I find it easiest to remember things I hear rather than things I see or do.",
       "I find it easiest to remember things I do rather than things I see or hear.",
       "I would rather look at photos than listen to music or workout (physical exercise).",
       "I would rather listen to music than look at photos or workout (physical exercise).",
       "I would rather workout (physical exercise) than look at photos or listen to music.",
       "The lessons I remember best are those in which I had to use my sense of sight.",
       "The lessons I remember best are those in which I had to use my sense of hearing.",
       "The lessons I remember best are those in which I had to use my sense of touch, smell or taste.",
       "When I get a new device, I usually read the instructions to learn how to operate it.",
       "When I get a new device, I usually ask someone to explain verbally how to operate it.",
       "When I get a new device, I usually try a hands-on approach to figure out how to operate it."
    ]
    return (
        <div>
        <h1>Sensory Survey</h1>
        <form onSubmit={(e)=>{}}>
            {textArray.map((title,idx)=>{
                let num = idx+1;
                return <Question num={num} text={title} key={num}/>
            })
            }
            <button>submit</button>
        </form>
    </div>
    )
}

export default SensorySurvey
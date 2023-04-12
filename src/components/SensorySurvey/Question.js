

function Question ({num, text}) {
    return (
        <div key={num}>
        <label> {text}
            <input type= 'radio' name= {`q${num}`} value='1'/> Strongly Disagree
            <input type= 'radio' name= {`q${num}`} value='2'/> Disagree
            <input type= 'radio' name= {`q${num}`} value='3'/> Neutral
            <input type= 'radio' name= {`q${num}`} value='4'/> Agree
            <input type= 'radio' name= {`q${num}`} value='5'/> Strongly Agree
        </label>
        </div>
    )
};

export default Question;

//qList= {}
//q1 = 5
// qList[q1] => 5;

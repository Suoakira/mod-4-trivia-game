import React from 'react';
import Popup from "reactjs-popup"


const GameTile = (props) => {

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    const randomQuestions = () => {
        const arrayOfAnswers = [props.question.incorrect_answers[0], props.question.incorrect_answers[1], props.question.incorrect_answers[2], props.question.correct_answer]
        return shuffle(arrayOfAnswers)
    }

    
    
    return (
        <Popup
            trigger={<button className="button">
                <div className="box">
                    {props.question.category}
                 </div>
         
                 </button>}
            modal
            closeOnDocumentClick>
            <span>
                <h4>{props.question.category}</h4>
                {props.question.question}
                
                <div>
                    <div className="pad">
                        <button>A: {randomQuestions()[0]}</button> 
                    </div>
                    <div>                    
                        <button>B: {randomQuestions()[1]}</button>
                    </div>
                    <div>
                        <button>C: {randomQuestions()[2]}</button>
                    </div>
                    <div>
                        <button>D: {randomQuestions()[3]}</button>
                    </div>
                </div>

            </span>
        </Popup>
    




  
      )
}
 
export default GameTile;
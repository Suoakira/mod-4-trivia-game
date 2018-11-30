import React from 'react';
import Popup from "reactjs-popup"


const GameTile = (props) => {
    
    
    
    
    
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
                        <button>A: {props.question.incorrect_answers[0]}</button> 
                    </div>
                    <div>                    
                        <button>B: {props.question.incorrect_answers[1]}</button>
                    </div>
                    <div>
                        <button>C: {props.question.incorrect_answers[2]}</button>
                    </div>
                    <div>
                        <button>D: {props.question.correct_answer}</button>
                    </div>
                </div>

            </span>
        </Popup>
    




  
      )
}
 
export default GameTile;
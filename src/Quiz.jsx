import { useState } from 'react'
import questions from './questions'
import './Quiz.css'

function Quiz() {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [score, setScore] = useState(0)

    function handleClick(option) {
        if (option === questions[indexQuestion].answer){
            setScore(prevScore => prevScore + 1)
        }
        setIndexQuestion(prevIndex => prevIndex + 1)
    }

    function handleReset() {
        setIndexQuestion(0)
        setScore(0)
    }

    return ( 
        <div className="quiz">
            <h1>Mon Quiz React</h1>
            <div className="score">{score} / 3</div>

        { questions[indexQuestion] ?
            <>
            <div className="question-section">
                {}
            </div>
            <h2>{questions[indexQuestion].question}</h2>
            <div className="options-section">

            {questions[indexQuestion].options.map(option => (
                <button onClick={() => handleClick(option)}>{option}</button>
            ))}
            </div>
            </>
            : <button onClick={() => handleReset()}>Recommencer</button>
            }
        </div>
     )
}

export default Quiz;
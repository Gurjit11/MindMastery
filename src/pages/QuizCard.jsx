import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../hero.css';

const QuizCard = () => {
  const navigate = useNavigate()
  const {type} = useParams()
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

    // const category ={
    //   geography:21,
    //   science:17,
    //   history:23,
    // }
    // const num = category
    // console.log(num)
  useEffect(() => {
    fetch(`${type === 'geography' ? 'https://opentdb.com/api.php?amount=5&category=21':'https://opentdb.com/api.php?amount=5&category=17'}`)
      .then(response => response.json())
      .then(data => setQuestions(data.results))
      .catch(error => console.log(error));
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  const handleSelectAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
  };

  const handleQuizSubmit = () => {
    setShowScore(true);
  };

  const currentOptions = questions.length > 0 ? questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer).sort() : [];

  return (
    <div className='conts min-h-[550px]'>
      <div className="container mt-5 mb-3 p-3">
        {questions.length > 0 && !showScore &&
          <div className="question ml-3 p-6">
            <div className="h5 mb-4 font-bold text-xl">{`Q. ${questions[currentQuestion].question}`}</div>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              {currentOptions.map((option, index) => (
                <label key={index} className={`options ${option === selectedOption ? 'selected' : ''}`} onClick={() => handleSelectAnswer(option)}>{option}
                  <input type="radio" name="radio" checked={option === selectedOption}/>
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>
        }
        <div className="d-flex align-items-center pt-3">
          {currentQuestion > 0 && !showScore &&
                 <></>
          }
          {!showScore && currentQuestion < questions.length - 1 ?
            <div className="ml-auto mr-3">
              <button className="btn btn-success" onClick={handleNextQuestion}>Next</button>
            </div>
            :
            !showScore &&
            <div className="ml-auto mr-3">
              <button className="btn btn-success" onClick={handleQuizSubmit}>Submit</button>
            </div>
          }
        </div>
        {showScore &&
          <div className="text-center mt-4">
            <h5>{`Your score is ${score} out of ${questions.length}`}</h5>
            <button onClick={() => navigate('/')}
            className='mt-3 text-white font-bold bg-blue-500 p-3 rounded-lg'>Back to Home</button>
          </div>
        }
      </div>
    </div>
  );
};

export default QuizCard;
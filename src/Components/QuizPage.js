import { useState } from "react";

const QuizPage = ({ quiz, onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState(null); // null, true(정답), false(오답)
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuiz = quiz[currentIdx];

  const handleClick = (item) => {
    if (answerState !== null) return; // 이미 답한 문제면 무시

    setSelectedAnswer(item);

    const isCorrect = item === currentQuiz.correct;
    if (isCorrect) {
      setScore(score + 10);
      setAnswerState(true);
    } else {
      setAnswerState(false);
    }
  };

  const handleNext = () => {
    setAnswerState(null);
    setSelectedAnswer(null);

    if (currentIdx + 1 < quiz.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onFinished(score);
    }
  };

  return (
    <div className="quiz-page">
      <div className="title">
        <h2>{currentQuiz.category}</h2>
        <p>
          {currentIdx + 1}/{quiz.length}
        </p>
      </div>
      <div className="quiz-game">
        <p className="score">현재 점수: {score}</p>
        <p className="question">
          <span>Q. </span>
          {currentQuiz.question}
        </p>
        <div className="choices">
          {currentQuiz.choices.map((item, idx) => {
            let className = "";
            if (answerState !== null) {
              if (item === currentQuiz.correct) {
                className = "correct";
              } else if (item === selectedAnswer) {
                className = "wrong";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleClick(item)}
                className={className}
                disabled={answerState !== null}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        {answerState !== null && (
          <p className="result">
            {answerState ? "정답입니다! 🎉" : `틀렸습니다..`}
          </p>
        )}

        {answerState !== null && (
          <button onClick={handleNext} className="next-button">
            {currentIdx + 1 < quiz.length ? "다음" : "결과"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

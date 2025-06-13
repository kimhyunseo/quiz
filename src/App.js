import "./App.scss";
import quizData from "./data/quizData";
import Categories from "./Components/Categories";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";
import {useState} from "react";

const App = () => {
  const [category, setCategory] = useState("");
  const [filterQuiz, setFilterQuiz] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const onSelectCatergory = (select)=>{
    setCategory(select);

    let quizArr = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
      setFilterQuiz(quizArr);
  }
  const handleFinish = (score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart = ()=>{
    setCategory("");
    setFinished(false);
    setScore(0);
  }
  return (
    <div className="app">
      { !category && !finished &&
      <Categories categories = {quizData.categories}
      onSelect={onSelectCatergory}/>
      }
      {
        category && !finished &&(<QuizPage quiz = {filterQuiz} onFinished = {handleFinish}/>)
      }
      {finished && (<Results onRestart = {handleRestart} appScore = {score}/>)}
    </div>
  );
};

export default App;
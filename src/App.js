import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Timer from "./components/Timer";

export const SECONDS_EVERY_QUESTION = 30;
function App() {
  const initialValue = {
    questions: [],
    status: "loading",
    index: 0,
    answer: -1,
    point: 0,
    highscore: 0,
    secondsRemain: 0,
  };

  function reducer(state, action) {
    if (action.type === "questions") {
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        // total qs lenth
        secondsRemain: action.payload.length,
      };
    }
    if (action.type === "error") {
      return {
        ...state,
        status: "error",
      };
    }
    if (action.type === "activated") {
      return {
        ...state,
        status: "active",
        // each total question * qs time
        secondsRemain: state.secondsRemain * SECONDS_EVERY_QUESTION,
      };
    }
    if (action.type === "answer-clicked") {
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        point:
          action.payload === question.correctOption
            ? state.point + question.points
            : state.point,
      };
    }
    if (action.type === "nextQuestion") {
      const totalQuestion = state.questions.length;
      return {
        ...state,
        index: totalQuestion - 1 > state.index ? state.index + 1 : state.index,
        answer: -1,
        status: totalQuestion - 1 === state.index ? "finished" : "active",
        highscore:
          totalQuestion - 1 === state.index
            ? state.point > state.highscore
              ? state.point
              : state.highscore
            : state.highscore,
      };
    }
    if (action.type === "restart") {
      return {
        ...initialValue,
        questions: state.questions,
        highscore: state.highscore,
        // total qs lenth
        secondsRemain: state.questions.length,
        status: "ready",
      };
    }
    if (action.type === "timer") {
      return {
        ...state,
        secondsRemain: state.secondsRemain - 1,
        status: state.secondsRemain === 0 ? "finished" : state.status,
      };
    }
    if (action.type === "stopQuiz") {
      return {
        ...state,
        status: "finished",
      };
    }
    return state;
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:3001/questions");
        const data = await res.json();
        dispatch({
          type: "questions",
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: "error",
          payload: e,
        });
      }
    };
    fetchQuestions();
  }, []);

  const [
    { questions, status, index, answer, point, highscore, secondsRemain },
    dispatch,
  ] = useReducer(reducer, initialValue);

  const totalMark = questions.reduce((prev, curr) => prev + curr.points, 0);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={questions?.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              totalQuestion={questions?.length}
              point={point}
              totalMark={totalMark}
              answer={answer}
            />
            <Timer dispatch={dispatch} secondsRemain={secondsRemain} />
            <Question
              eachQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
              point={point}
            />
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            point={point}
            totalMark={totalMark}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

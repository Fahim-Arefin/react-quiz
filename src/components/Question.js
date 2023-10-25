import React from "react";

function Question({ eachQuestion, dispatch, answer, point }) {
  return (
    <div
      className={`mx-auto my-10 w-[50%] ${
        !(answer === -1) ? "text-black" : "text-white"
      }`}
    >
      <h1 className="text-3xl text-center text-white">
        {eachQuestion.question}
      </h1>
      <div className="flex flex-col items-center space-y-4  mt-6">
        {/* options */}
        {eachQuestion.options.map((option, i) => (
          <button
            key={i}
            disabled={answer !== -1}
            onClick={() => {
              dispatch({
                type: "answer-clicked",
                payload: i,
              });
            }}
            className={`text-start text-xl w-80 px-12 py-4 rounded-full duration-150 transition-all 
            ${
              !(answer === -1)
                ? eachQuestion.correctOption === i
                  ? "bg-[#1098ad] translate-x-6 cursor-not-allowed"
                  : "bg-[#ffa94d] cursor-not-allowed"
                : "bg-[#495057] hover:translate-x-6 hover:bg-[#3d4348]"
            }
            
            `}
          >
            {option}
          </button>
        ))}
        {/* next button */}
        {answer !== -1 && (
          <button
            onClick={() => dispatch({ type: "nextQuestion" })}
            className=" self-end mr-40 text-center text-white text-xl w-24 px-2 py-2 rounded-full bg-[#495057] hover:bg-[#3d4348] active:bg-[#31363b]"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;

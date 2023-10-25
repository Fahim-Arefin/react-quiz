import React from "react";
import { SECONDS_EVERY_QUESTION } from "../App";

function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="space-y-4 w-[80%] mx-auto mt-24 text-center text-white">
      <h1 className="text-5xl">Welcome to the React Quiz</h1>
      <h2 className="text-2xl text-gray-300">
        {numOfQuestions} Question to test your react mastary
      </h2>
      <h2 className="text-sm text-gray-400">
        You can get maximum {SECONDS_EVERY_QUESTION} seconds for each question
      </h2>
      <button
        className=" text-xl w-80 px-12 py-4 bg-[#495057] rounded-full hover:bg-[#40454a] active:bg-[#31363b]"
        onClick={() => dispatch({ type: "activated" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

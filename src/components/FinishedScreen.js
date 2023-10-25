import React from "react";

function FinishedScreen({ totalMark, point, highscore, dispatch }) {
  const percentage = Math.ceil((point / totalMark) * 100);
  let emoji;
  if (percentage === 100) {
    emoji = "💥";
  } else if (percentage > 80) {
    emoji = "💢";
  } else if (percentage > 65) {
    emoji = "😎";
  } else if (percentage > 50) {
    emoji = "🙁";
  } else if (percentage > 20) {
    emoji = "😓";
  } else if (percentage >= 0) {
    emoji = "😞";
  }

  return (
    <div className="mx-auto mt-24 w-[40%] text-white flex flex-col ">
      <div className=" text-center">
        <h1 className="text-2xl  bg-[#1098ad] p-4 rounded-full">
          <span>{emoji}</span> You scored {point} out of {totalMark} (
          {percentage}
          %)
        </h1>
        <span className="text-lg">(Highscore : {highscore} points)</span>
      </div>
      <div className="mt-32 self-end">
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="text-lg  py-2 px-6 bg-[#495057] rounded-full hover:bg-[#40454a] active:bg-[#31363b]"
        >
          restart
        </button>
      </div>
    </div>
  );
}

export default FinishedScreen;

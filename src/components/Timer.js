import React, { useEffect } from "react";

function Timer({ dispatch, secondsRemain }) {
  const mins = Math.floor(secondsRemain / 60);
  const seconds = secondsRemain % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className="flex w-[40%] mx-auto p-6 justify-center">
      <div className="w-24 bg-[#495057] text-center text-white text-xl px-2 py-2 rounded-full">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    </div>
  );
}

export default Timer;

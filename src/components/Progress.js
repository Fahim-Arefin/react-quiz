import React from "react";

function Progress({ index, totalQuestion, point, totalMark, answer }) {
  return (
    <div className="mx-auto mt-10 w-[40%]">
      <progress max={totalQuestion} value={index + Number(answer !== -1)} />

      <div className=" flex justify-between text-white text-lg">
        <div>
          Question<span className="font-bold">{index + 1}</span>/{totalQuestion}
        </div>
        <div>
          {point}/{totalMark}
        </div>
      </div>
    </div>
  );
}

export default Progress;

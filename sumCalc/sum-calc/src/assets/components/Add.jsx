import React from "react";
import { useState } from "react";
function Add() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const calSum = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setSum(isNaN(res) ? "" : res);

    return (
      <div className="m-auto w-80 shadow-lg rounded-xl p-8 text-black bg-amber-200 ">
        <h2 className="text-center text-xl font-bold mb-4">Sum calculator</h2>
        <form>
          <div className="mb-4">
            <label className="text-black">Number 1</label>
            <input
              type="text"
              placeholder="Enter Number1 Value"
              className="text-black"
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label>Number 2</label>
            <input
              type="text"
              placeholder="Enter Number2 Value"
              className="text-black"
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="m-auto rw-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              "
              onClick={calSum}
            >
              Sum
            </button>
          </div>
          <div>
            <h2 className="text-center text-xl font-bold mb-4">
              your sum is :{sum !== null ? sum : ""}
            </h2>
          </div>
        </form>
      </div>
    );
  };
}
export default Add;

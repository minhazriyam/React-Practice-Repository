import React from "react";

function Navigation() {
  return (
    <div className="flex flex-col justify-between">
      <ul className="flex flex-row justify-between">
        <a href="" className="text-white">
          Home
        </a>
        <a href="">About</a>
        <a href="">Contact</a>
      </ul>

      <button className="rounded border-4 text-blue bg-blend-color-burn cursor-pointer">
        Login
      </button>
    </div>
  );
}

export default Navigation;

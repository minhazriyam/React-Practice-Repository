import React from "react";
import marsImage from "../mars.jpg";

function Home(props) {
  const { data } = props;

  return (
    <div className="imgContainer">
      <img className="bgImage" src={data.hdurl} alt={data.title || "bg-img"} />
    </div>
  );
}

export default Home;

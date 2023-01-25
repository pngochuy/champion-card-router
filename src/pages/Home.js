import React from "react";
import { Link } from "react-router-dom";

function Home({ champList }) {
  const handleOutputID = () => {
    let i = champList.length - 1;
    let n = champList[i].id;
    let s = "/output/";
    return s.concat(n);
  };
  return (
    <>
      <div className="container">
        <div className="controll-btn">
          <Link to="/input">
            <button className="input-btn btn">Input</button>
          </Link>
          <Link to={handleOutputID()}>
            <button className="output-btn btn">Output</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;

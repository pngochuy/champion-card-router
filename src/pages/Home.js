import React from "react";
import { Link } from "react-router-dom";

function Home({ champList }) {
  const handleOutputID = () => {
    let i = champList.length - 1; // lấy id cuối cùng của champList
    let n = champList[i].id;
    let s = "/output/";
    return s.concat(n);
    //or: return s.concat(n.toString());
  };
  return (
    <>
      <div className="container">
        <div className="controll-btn">
          <Link to="/input">
            <button className="input-btn btn">Input</button>
          </Link>
          <Link to={() => handleOutputID()}>
            <button className="output-btn btn">Output</button>
          </Link>
        </div>
      </div>
    </>
  );
}
// 1 14 27 32 35
export default Home;

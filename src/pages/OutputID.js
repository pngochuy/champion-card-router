import React from "react";
import ChampInfo from "../components/ChampInfo";
import { Link, useParams } from "react-router-dom";
function OutputID({ champList, setChampList }) {
  const { para } = useParams();
  let c = 1;
  console.log(champList.length);

  return (
    <>
      {champList.map((info, index) => {
        console.log(info.name);
        if (parseInt(para) === info.id) {
          if (c <= 1) {
            ++c;
            return (
              <div key={index}>
                <Link to="/home" className="icon icon-exand">
                  <i class="fa-solid fa-circle-chevron-left icon-back"></i>
                </Link>
                <ChampInfo
                  champName={info.name}
                  champImg={info.img}
                ></ChampInfo>
              </div>
            );
          } else {
            c = 1;
          }
        }
      })}

      <Link to="/input">
        <button className="input-btn btn">Input</button>
      </Link>
    </>
  );
}

export default OutputID;

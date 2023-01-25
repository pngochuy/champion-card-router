import React from "react";
function ChampInfo({ champName, champImg }) {
  const champ_img = "https://api.opendota.com" + champImg;
  return (
    <>
      <div className="container">
        <div className="controll-champ-info">
          <h3 className="champ_name">
            <p>{champName}</p>
          </h3>
          <div className="champ_img">
            <img src={champ_img} alt="champion-img" className="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampInfo;

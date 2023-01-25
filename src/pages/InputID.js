import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function InputID({ champList, setChampList }) {
  const [newID, setNewID] = useState("");
  const navigate = useNavigate();
  const inputRefID = useRef();

  const handleAddNewChamp = () => {
    if (newID !== "") {
      console.log("Added");
      setChampList(newID);
      handleGetApi();
      setNewID("");
      inputRefID.current.focus();
    }
  };
  const handleEnter = (e) => {
    if (e.code === "Enter") handleAddNewChamp();
  };
  const handleGetApi = async () => {
    console.log("call API processing...");
    const newChampInfo = await axios
      .get(
        "https://api.opendota.com/api/heroStats?fbclid=IwAR3mD-VVoMwinwGKdaKEc6ydvbE3yRsnpcxhrabG5XzWadNBLKgN1BoJGUY"
      )
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (parseInt(newID) === response.data[i].id) {
            return response.data[i];
          }
        }
      });
    setChampList(newChampInfo);
    navigate("/output/" + newID);
  };

  return (
    <>
      <div className="container">
        <div className="controll-input">
          <input
            type="text"
            placeholder="// input id ..."
            onChange={(e) => {
              setNewID(e.target.value);
            }}
            onKeyDown={(e) => handleEnter(e)}
            ref={inputRefID}
            value={newID}
          />
          <button
            className="submit-btn btn"
            onClick={() => handleAddNewChamp()}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default InputID;

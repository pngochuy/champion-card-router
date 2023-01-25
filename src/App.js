import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assests/style.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import InputID from "./pages/InputID";
import OutputID from "./pages/OutputID";
function App() {
  const [champList, setChampList] = useState(
    JSON.parse(localStorage.getItem("champList")) ?? []
  );
  console.log(localStorage.getItem("champList"));
  useEffect(() => {
    localStorage.setItem("champList", JSON.stringify(champList));
  }, [champList]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home champList={champList}></Home>} />
          <Route path="/home" element={<Home champList={champList}></Home>} />
          <Route
            path="/input"
            element={
              <InputID
                setChampList={(newChamp) => {
                  setChampList([...champList, newChamp]);
                }}
                champList={champList}
              ></InputID>
            }
          />
          <Route
            path="/output/:para"
            element={
              <OutputID
                setChampList={(updateChamp) => {
                  setChampList([...champList, updateChamp]);
                }}
                champList={champList}
              ></OutputID>
            }
          />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

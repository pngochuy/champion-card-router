import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assests/style.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import InputID from "./pages/InputID";
import OutputID from "./pages/OutputID";
function App() {
  // tạo Local Storage để truyền data từ components cha đến con
  const [champList, setChampList] = useState(
    JSON.parse(localStorage.getItem("champList")) ?? []
    // nếu trong mảng champList ko có gì thì mặc định là [] rỗng,
    // => phải xét TH khi trong mảng ko có giá trị gì, sẽ bị in ra NULL (hoặc lỗi đỏ nếu truyền code cho người khác)
  );
  console.log(localStorage.getItem("champList"));
  useEffect(() => {
    localStorage.setItem("champList", JSON.stringify(champList));
  }, [champList]);
  // window.localStorage.clear();
  // xí để xóa
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

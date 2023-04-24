import { Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import Home from "./components/Home";
import MovieListe from "./components/MovieListe";
function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", backgroundColor: "black", hieght: "100px" }}>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;

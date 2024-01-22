import { Routes, Route } from "react-router-dom";
import Cat from "./Cat";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/example3" element={<Example3 />} />
        <Route path="/example4" element={<Example4 />} />
      </Routes>
    </div>
  );
}

export default App;

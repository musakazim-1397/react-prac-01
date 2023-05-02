import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;

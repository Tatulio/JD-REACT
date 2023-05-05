import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Characters from "./components/pages/characters/Characters";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

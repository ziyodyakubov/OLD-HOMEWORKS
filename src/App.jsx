import First from "./components/first"
import Home from "./components/home"
import Oldtask from "./components/Homework-old-2"
import Second from "./components/second"
import Third from "./components/third"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>}/>
          <Route path="/old" element={<Oldtask/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

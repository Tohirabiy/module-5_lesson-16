import { useState, useRef } from "react";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  // let [isName, setIsName] = useState("React.js");
  // const [show, setShow] =useState(false);

  // const [text,setText] =useState('')
  // const inputRef=useRef('');
  // const showInputValue=()=>{
  //   console.log(inputRef.current.value);
  //   setText(inputRef.current.value)
  //   inputRef.current.focus()
  //   inputRef.current.classList.toggle('hidden')
  // }

  return (
    <>
   
  
      <header>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
        </ul>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
    </>
  );
};

export default App;

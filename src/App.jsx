import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home.jsx";
import {AppContext} from "/src/Context.jsx";
import {useContext} from "react";


function App() {

    const {darkMode} = useContext(AppContext);

    console.log("darkMNode initially in App.jsx: ",darkMode," ");

  return (
      <div className={`max-w-screen ${darkMode ? "common-bg" : "bg-white"} ${darkMode ? "text-white" : "text-black"} `}>
         <Router>
             <Routes>
                <Route path="/" element={<Home/>} />
             </Routes>
        </Router>
      </div>

  )
}

export default App

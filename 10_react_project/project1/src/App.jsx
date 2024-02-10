import React from "react"
import Navbar from "./components/navbar"
import { ReactDOM } from "react"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Menu from "./components/Menu";
import Location from "./components/Location";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css'
import MainContent from "./components/MainContent";


function App() {
  // const [count, setCount] = useState(0)
  const routes = [
    { path: '/Menu', component: Menu },
    { path: '/Location', component: Location },
    { path: '/About', component: About },
    { path: '/Contact', component: Contact },
  ];
  return (
    <>
     
    <Router>
      <div>
        <Navbar />
          <Routes >
          { routes.map((route)=>(
            <Route key={route.path} path={route.path} element={<route.component />}></Route>
          ))}
          </Routes>
        <MainContent />
      </div>
    </Router>
   
    </>
  
  );
};

export default App

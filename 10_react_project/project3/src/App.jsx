import styled from "styled-components"
import Start_game from "./components/Start_game";
import { useState } from "react";
import GamePage from "./components/GamePage";

function App() {
  const [isStarted,setIsStarted] = useState(true);
  
  const handleClick = () => {
    // console.log(isStarted);
    setIsStarted((val)=>!val);
    // setIsStarted(!(isStarted));
    // console.log(isStarted);
  }
  return (
    <>
    {isStarted ? (<Start_game onButtonClick={handleClick} />):(<GamePage />)}
      
    </>
  )
}

export default App


const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;
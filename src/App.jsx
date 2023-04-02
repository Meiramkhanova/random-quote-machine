import { useState } from "react"
// import { Quotes } from "./Quotes"
// import { colors, generateRandomColor } from "./Quotes"
import { Container } from "./Container"
import { Button } from "./Button";


function App() {
  // const[color, setColor] =  useState(generateRandomColor)
  const [backgroundColor, setBackgroundColor] = useState("#c4b5fd");

  const handleBackgroundColorChange = () => {
    setBackgroundColor(generateRandomColor());
  };

  function generateRandomColor(){

    const colors= [
      "#4ade80",
      "#78716c",
      "#f87171",
      "#fb923c",
      "#fde047",
      "#a3e635",
      "#e879f9",
      "#99f6e4",
      "#22d3ee",
      "#c4b5fd",
      "#f472b6",
      "#f43f5e",
      "#e9d5ff",
      "#4c1d95",
      "#155e75",
      "#ca8a04",
      "#9333ea",
  ];
    const b = Math.floor(Math.random() * colors.length);
    return colors[b];
}

  return (
    // <div className='flex justify-center items-center h-screen text-white'>
    //   <Quotes/>
    // </div>
    <div className={`flex justify-center items-center h-screen shadow-inner`} style={{backgroundColor: backgroundColor, color:backgroundColor}}>
    <Container onBackgroundColorChange={handleBackgroundColorChange} buttonColor={backgroundColor} />
  </div>
  )
}

export default App

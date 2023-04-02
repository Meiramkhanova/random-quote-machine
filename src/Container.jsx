import quotesData from "./data/data.json"
import { Text } from "./Text";
import {Button} from "./Button"
import { useState } from "react";


function generateRandomQuote(){
    const a = Math.floor(Math.random()*quotesData.data.length)
    return a
}

export const Container = (props) =>{
    const [quote,setQuote] = useState(generateRandomQuote)

    const handleChangeQuote = () =>{
        setQuote(generateRandomQuote());
        props.onBackgroundColorChange();
    }

    return(
        <div className="bg-[#f1f5f9] rounded-lg  h-96 w-2/5 " >
            <Text
            quote = {quotesData.data[quote].quote}
            author = {quotesData.data[quote].author}
            />
            <Button  handleChangeQuote={ handleChangeQuote} style={{backgroundColor:props.buttonColor, position: "absolute", bottom: "10px", right: "10px"  }} />
        </div>
    );
}

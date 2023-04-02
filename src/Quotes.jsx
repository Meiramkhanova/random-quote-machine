import { Quote } from "./Quote";
import { Actions } from "./Actions";
import quotesData from "./data/quotes.json"



const colors= [
    "pink",
    "rose",
    "fuchsia",
    "sky",
    "teal",
    "aqua",
    "amber",
    "zinc",
];

//it is outside because it is not not has states
function generateRandomQuote(){
    const r = Math.floor(Math.random()*quotesData.quotes.length-1)
    console.log(r)
    return r;
}


export function generateRandomColor(){
   return Math.floor(Math.random()*colors.length-1);
}

export const Quotes = () =>{
    
    const[quote, setQuote] = useState(generateRandomQuote);

    const handleChangeQuote= () => {
        setQuote(generateRandomQuote());
        setColor(generateRandomColor());
    }

    return (
    <div className="bg-black rounded-lg p-4 h-72 w-96">
    <Quote
    quote = {quotesData.quotes[quote].quote}
    author = {quotesData.quotes[quote].author}
    /> 
    <Actions handleChangeQuote={handleChangeQuote}/>
    </div>
    );
}
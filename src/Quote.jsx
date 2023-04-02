export const Quote = ({quote, author}) =>{
    console.log(quote);
    console.log(author);
    return (
        <div>
            <h1>Quote : {quote}</h1>
            <h3>Author: {author}</h3>
        </div>
    )
}
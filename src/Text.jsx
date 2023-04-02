export const Text = ({quote, author}) =>{
    console.log(quote);
    console.log(author);
    return (
        <div className="pt-20 pl-10 pr-10 font-serif">
            <h1  className="pt-10 text-2xl font-medium ">"{quote}"</h1>
            <p className="pt-10 pl-60 mb-5 text-lg font-medium">- {author}</p>
        </div>
    );
}
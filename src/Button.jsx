export const Button = (props)=>{
    return(
        <div className="pl-80 ml-20">
            <button className="bg-[#7c3aed] text-white rounded p-3 h-15 w-32" onClick={props.handleChangeQuote} style={{ backgroundColor: props.style.backgroundColor}} >
                New quote
            </button>
        </div>
    );
}
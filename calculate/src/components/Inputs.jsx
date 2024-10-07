
const Inputs = (Item) => {
    const {num1, num2, setnum1, setnum2, setReasult} = Item;
    return (
        <div>
            <input type="Number" onChange={(e) => setnum1(+e.target.value)} />
            <br /> 
            <br />
            <input type="Number" onChange={(e) => setnum2(+e.target.value)} />
            <br />
            <br />
            <button onClick={() => {setReasult(num1 + num2)}}>+</button> 
            <button onClick={() => {setReasult(num1 - num2)}}>-</button>
            <button onClick={() => {setReasult(num1 * num2)}}>*</button>
            <button onClick={() => {setReasult(num1 / num2)}}>/</button>          
        </div>
    );
}

export default Inputs;

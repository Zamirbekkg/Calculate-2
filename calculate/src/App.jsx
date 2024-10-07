
import { useState } from 'react'
import './App.css'
import Inputs from './components/inputs';
import Result from './components/Result';

function App() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setReasult] = useState();
  return (
    <>
    <h1>Calculate</h1>
      <div>
        <Inputs num1={num1} num2={num2} setnum1={setnum1} setnum2={setnum2} setReasult={setReasult} />
        <Result result={result} />
      </div>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
function App(){
  // const [state, setState] = useState(initialState)
  const [incrment, setIncrement] = useState(0)
  console.log(incrment)
  console.log(setIncrement)

  function increments(){
    // incrment +=1;
    setIncrement(incrment+1);
  }
  function dec(){
      setIncrement(increments-1)
  }
  function reset(){
    setIncrement(incrment===0)
  }

  return (
    <div>
      <Header />
      <h1>{incrment}</h1>
      <button onClick={increments}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
      <Footer />
    </div>
  )
}

export default App



import {useState} from 'react'
import './App.css'
import Number from "./numbers/Number"

const App = () => {
  const [number, setNumber] = useState([0, 0, 0, 0, 0])

  const printNumbers = () => {
    const massNumbers: number[] = [];
    do {
      let randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      if (massNumbers.length === 0) {
        massNumbers.push(randomNumber);
      } else if (massNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      } else {
        massNumbers.push(randomNumber);
      }

    } while (massNumbers.length <= 4)
    massNumbers.sort((a, b) => {
      return a - b;
    });
    setNumber(massNumbers);
  }
  return (

    <div className="App">
      <div className="main-box">
        <button onClick={printNumbers} className="btn">New numbers</button>
        <div className="ball-number">
          <Number number={number[0]}></Number>
          <Number number={number[1]}></Number>
          <Number number={number[2]}></Number>
          <Number number={number[3]}></Number>
          <Number number={number[4]}></Number>
        </div>
      </div>
    </div>

  );
};;

export default App;

import "./App.css";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import logo from './images/card-logo.svg';
import completeIcon from './images/icon-complete.svg';
import { useState } from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
function App() {
  
  const [number, setNumber] = useState("1234 5678 9101 0000");
  const [name, setName] = useState('Nash');
  const [expiry, setExpiry] = useState("03/28");
  const [cvv, setCvv] = useState("503");


  return (
    <div className="App">
      <img id="logo" src={logo}/>
      <p className="text-entered" id="card-num">{number}</p>
      <div className="text-entered" id="card-name">{name}</div>
      <div className="text-entered" id="card-exp">{expiry}</div>
      <div className="text-entered" id="card-cvv">{cvv}</div>

      <div className="container-for-images">
        <img id="card-front" src={cardFront}></img>
        <img id="card-back" src={cardBack} />
      </div>
      <div id="form-container">
        <form>
          <label for="cardholder-name">CARDHOLDER NAME</label>
          <input
            onChange={(e)=>{setName((e.target.value).toUpperCase())}}
            placeholder="e.g Anthony Gonsalves"
            id="cardholder-name"
            type="text"
       
          />

          <label for="card-number">CARD NUMBER</label>
          <input
          onChange={(e)=>{setNumber((e.target.value))}}
            placeholder="1234 4565 3323 3455"
            id="card-number"
            type="text"
            
          />
          <div className="flex-horizontal">
            <label for="expiry-date">EXP. DATE (MM/YY)</label>
            <label for="cvc-number">CVC</label>
          </div>
          <div className="flex-horizontal">
            <div>
              <input onChange={(e)=>{setExpiry((e.target.value))}} placeholder="MM" id="expiry-date" type="number" />
              <input onChange={(e)=>{setExpiry((e.target.value))}} placeholder="YY" id="expiry-date" type="number" />
            </div>
            <input onChange={(e)=>{setCvv((e.target.value))}} placeholder="e.g 123" id="cvc-number" type="number"/>
          </div>
          <button onClick={(e)=>{e.preventDefault()}} className="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import completeIcon from './images/icon-complete.svg';

import "./App.css";
export const Completed = () => {
  return (
    <div className='confirmed-cont'>
        <img id='confirm-image' src={completeIcon}/>
        <h1 className='thankyou'>THANK YOU!</h1>
        <p className='confirmation-text'>We've added your card details</p>
        <button className='submit'>Continue</button>
        </div>
  )
}

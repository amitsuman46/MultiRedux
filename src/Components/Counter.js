import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { counterAction } from '../store'
const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter.counter);
  return (
    <div><label>{counter}</label><br/>
    <button onClick={()=>{dispatch(counterAction.increment())}}>increment</button>
    <br/>
    <button onClick={()=>{dispatch(counterAction.decrement())}}>decrement</button></div>
  )
}

export default Counter;
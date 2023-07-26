import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { timerAction } from '../store';
const Timer = () => {
    const hour = useSelector(state=>state.timer.hour);
    const min = useSelector(state=>state.timer.min);
    const sec = useSelector(state=>state.timer.sec);

    const dispatch = useDispatch();
    const timerHandler = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        dispatch(timerAction.iHour(hours));
        dispatch(timerAction.iMin(minutes));
        dispatch(timerAction.iSec(seconds));
    }
  return (
    <div>
        <h1>{hour}:{min}:{sec}</h1>
        <button onClick={timerHandler}>
            CurrentTime
        </button>
    </div>
  )
}

export default Timer
import './App.css';
import Counter from './Components/Counter';
import Timer from './Components/Timer';
import { toggleAction } from './store/toggle';
import {useSelector,useDispatch} from 'react-redux';
function App() {
  const  dispatch = useDispatch();
  const toggle = useSelector(state=>state.toggle);
  return (
    <div className="App">
      <br/>
      { !toggle &&
      <>
      <Counter/>
      <Timer/>
      </>
      }
      <button onClick={()=>{dispatch(toggleAction.toggle())}}> Toggle </button>
    </div>
  );
}

export default App;

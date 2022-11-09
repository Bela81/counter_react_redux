import './App.css';
import {increment, decrement} from './features/counterSlice'
import {useSelector, useDispatch} from 'react-redux' 

function Display(){
  const count = useSelector( function(state){
    return state.counter.value;
  } )
  return <h1>{ count }</h1>;
}

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <Display />  
        <div>
          <button onClick={()=>dispatch( decrement() )}> - </button>
          <button onClick={()=>dispatch( increment() )}> + </button>
        </div>
      </header>
    </div>
  );
}

export default App;

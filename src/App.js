import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//import Mycomp from './components/Mycomp';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  const dis = () => { dispatch({ type: "SET_USER" }) };
  console.log((user));
  return (

    <div className="App">
      <h2>{user.name}</h2>
    </div>

  );
}

export default App;

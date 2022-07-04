import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//import Mycomp from './components/Mycomp';

function App() {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState(false);
  const user = useSelector((state) => state.user)
  useEffect(() => {
    dispatch({ type: "SET_USER" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetch])

  const l = () => {
    console.log(user);
  }
  l();

  return (

    <div className="App">

    </div>

  );
}

export default App;

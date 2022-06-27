import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Mycomp from './components/Mycomp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Mycomp />
      </div>
    </Provider>
  );
}

export default App;

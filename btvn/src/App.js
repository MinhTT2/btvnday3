import logo from './logo.svg';
import './App.css';
import VndtoUsd from './components/VndtoUsd';
import ChangeTime from './components/ChangeTime';
import Content from './components/Content';
import { useContext } from 'react';
import MyContext from './components/Context';
import LearnUseEffect from './components/LearnUseEffect';
import BaiMot from './components/BaiMot';


function App() {
  const data = useContext(MyContext);
  const { count, setCount, products } = data;

  return (
    <div className="App">
      {/* <VndtoUsd />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p>Count: {count}</p>
      <div>
        <ChangeTime />
        
        <Content />
      </div> */}
      <ChangeTime/>
      <VndtoUsd/>
      <BaiMot/>
    </div>
  );
}

export default App;

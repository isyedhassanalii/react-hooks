import logo from './logo.svg';
import './App.css';
import UseState from './UseState/UseState';
import UseStateWithEvent from './UseState/UseStateWithEvent';
import UseEffect from './UseEffect/UseEffect';
import UseEffectWithApiFetch from './UseEffect/UseEffectWithApiFetch';

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseStateWithEvent/>
      <UseEffect/>
      <UseEffectWithApiFetch/>
    </div>
  );
}

export default App;

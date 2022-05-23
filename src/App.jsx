import './App.css';
import Hello from './Components/009/hello';
import Kurmis from './Components/009/kurmis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva='green' color='pink'></Hello>  {/*spalva yra propsas*/}
        <Kurmis/>
        <Hello spalva='skyblue' color='yellow'/>
        <Hello spalva='grey' color='lightgrey'></Hello>
        <Kurmis skaicius={4}></Kurmis>
      </header>
    </div>
  );
}

export default App;


// + konvertuoja stringa i skaiciu

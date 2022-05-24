import './App.scss';
import { useEffect, useRef, useState } from "react"; //visi hugai turi buti importuoti

//https://dmitripavlutin.com/react-useref-guide/

function App() {
    const [count, setCount] = useState(null);

    const mano = useRef(0);
    const panda = useRef(0);

    useEffect( () => {
        setCount(parseInt(localStorage.getItem('count') ?? 0));
    }, []);

    useEffect( () => {
        if (null === count) {
            return;
        }
        localStorage.setItem('count', count);
    }, [count]);

    const add = () => {
    setCount(c => c + 1);
    mano.current = mano.current + 3;
    console.log(mano.current);
    //const p = document.querySelector('#panda');
    const p = panda.current;
    console.log(p.dataset.panda); //DATASET
    }

    const addCat = () => {
        localStorage.setItem('katinukas', 'Storas katinukas Murka');
    }

    const addCats = () => {
        localStorage.setItem('katinai', JSON.stringify(['Murka', 'Pilkis']));
    }

    const getCat = () => {
        console.log(JSON.parse(localStorage.getItem('katinai')));
    }

    const remCat = () => {
        localStorage.removeItem('katinukas');
    }

  return (
    <div className="App">
      <header className="App-header">
      <h1>useRef LovalStorage {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={addCat}>Add Cat</button>
      <button onClick={getCat}>Get Cat</button>
      <button onClick={remCat}>Remove Cat</button>
      <button onClick={addCats}>Add Cats</button>
      <div ref = {panda} data-panda = 'miega'></div>
      </header>
    </div>
  );
}

export default App;


// duomenų kaupimas
// arrray 
// masyvas objektas
// [{id=1 petras}]
// [{id=2 antanas}]
// [{id=3 bebras}]
// indetikuojame pagal id, nes array index neturi reiksmes
// id prasideda nuo 1
// ID NEGALIMA PERPANAUDOTI
//CRUD (Create, read, update and delete)

import './App.scss';
import { useState } from 'react';
import getId from './Functions/getId';

function App() {
    const [kv, setKv] = useState([]);
    const add = () => {
        setKv(k => [...k, getId('KV')])
    }

    return (
    <div className='App'>
        <header className='App-header'>
            <button onClick={add} >A-DD</button>
            <div className="kvc">
            {
            kv.map((k, i) => <div key={i} className="kv">{k}</div>)
            }
            </div>
        </header>
    </div>
    )
    
}

export default App;
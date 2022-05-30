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
            {
            kv.map((k, i) => <div key={i} className="kv">{k}</div>)
            }
        </header>
    </div>
    )
    
}

export default App;
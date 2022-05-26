import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import {v4 as uuidv4} from 'uuid';

function App() {
    const [avys, setAvys] = useState([]);
    const newA = () => {
        const avis = 
        {
            id: uuidv4(),
            color:randColor(),
            where: 'ganykla'
        }
        setAvys(a => [...a, avis]);
    }

    /* avys eina i kirpyka pagal savo pozicija ganykloje
    const go = id => {
        setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis));
    }
    */
   
    // eina i kirpykla eiles tvarka
    const go = id => {
        setAvys(a => {
        const avis = a.filter(av => av.id === id)[0];
        avis.where = 'kirpykla';
        const kitos = a.filter(av => av.id !== id);
        return [...kitos, avis];
        }
        
    )}
    
    return (
    <div className='App'>
        <header className='App-header'>
            <div className='kvc'>
                {
                    avys.filter(a => a.where === 'kirpykla').map(a => <div key={a.id} className='kv' style={{background:a.color}}></div>) //be "style" butu vienos spalvos
                }
            </div>
            <h1>AVYS</h1>
            <div className='kvc'>
                {
                    avys.filter(a => a.where === 'ganykla').map(a => <div onClick={() => go(a.id)} key={a.id} className='kv' style={{background:a.color}}></div>) //be "style" butu vienos spalvos
                }
            </div>
            <button onClick={newA}>Naujas Avinas</button>
        </header>
    </div>
    )
    
    
}

export default App;
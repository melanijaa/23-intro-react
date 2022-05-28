import { useState } from 'react';
import './App.scss';

function App() {
    const [text, setText] = useState('');
    const [select, setSelect] = useState('one');
    const [cb, setCb] = useState({a: false, b: false, c: true, d: true, e: false});
    const [radio, setRadio] = useState('a');
    const [color, setColor] = useState('');

    const inputText = e => {
        //console.log(e.target.value)
        //console.log('gffht'.padStart(10,0))
        setText(e.target.value)
    }

    const inputColor = e => {
        setColor(e.target.value)
    }

    const cbClick = c => {
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}));
    }

    return (
    <div className='App'>
        <header className='App-header'  style={{background: color}}>
        <fieldset>
            <legend>TEXT</legend>
                <input type="text" onChange={inputText} value={text}></input>
        </fieldset>
        <fieldset>
            <legend>SELECT</legend>
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value='one'>Vienas</option>
                <option value='two'>Du</option>
                <option value='three'>Trys</option>
                <option value='four'>Keturi</option>
            </select>
        </fieldset>
        <fieldset>
            <legend>CHECKBOX</legend>
            A <input type="checkbox" onChange={() => cbClick('a')} checked={cb.a}/>
            B <input type="checkbox" onChange={() => cbClick('b')} checked={cb.b}/>
            C <input type="checkbox" onChange={() => cbClick('c')} checked={cb.c}/>
            D <input type="checkbox" onChange={() => cbClick('d')} checked={cb.d}/>
            E <input type="checkbox" onChange={() => cbClick('e')} checked={cb.e}/>
        </fieldset>
        <fieldset>
            <legend>RADIO</legend>
            A <input type="radio" name='r' value='a' onChange={e => setRadio(e.target.value)} checked={radio === 'a'}/>
            B <input type="radio" name='r' value='b' onChange={e => setRadio(e.target.value)} checked={radio === 'b'}/>
            C <input type="radio" name='r' value='c' onChange={e => setRadio(e.target.value)} checked={radio === 'c'}/>
            D <input type="radio" name='r' value='d' onChange={e => setRadio(e.target.value)} checked={radio === 'd'}/>
            E <input type="radio" name='r' value='e' onChange={e => setRadio(e.target.value)} checked={radio === 'e'}/>
        </fieldset>
        <fieldset>
            <legend>COLOR</legend>
            CHANGE COLOR <input type="color" onChange={inputColor} value='color' />
        </fieldset>
        </header>
    </div>
    )
    
}

export default App;
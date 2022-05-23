function Kurmis({skaicius}) {
    const xzz = 33;
    return <>
        <h3>Kurmis</h3>
        <span>Urvinis padaras Nr. {10 + 11 + xzz} </span>
        <span>Test Nr. {xzz > 29 ? 'Daug' : 'Nedaug'}</span>
        <span>Nr. {10 + 11 + xzz} {xzz > 29 ? 'Daug' : 'Nedaug'}</span>
        <span> Test {skaicius + 11}</span>
    </> 
    //jei yra kelios eilutes teksto reikia ()
    // jei yra daugiau nei vienas tagas <></>
    // {} yra perejimas i JS mode (vienos eilutes kodas)
    // {} kiekis yra neribotas
    //terneris

}

export default Kurmis
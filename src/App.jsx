import Create from './Components/CRUD/Create';
import './bootstrap.css';
import { useEffect, useState } from 'react';

function App() {

    const [createData] = useState(null); //setCreateData

    //create
    useEffect(() => {
        if (null === createData) {
            return;
        }
        // to localStorage

    }, [createData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create></Create>
                    </div>
                    <div className="col-8">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;

//ctrl + h

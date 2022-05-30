import Create from './Components/CRUD/Create';
import './bootstrap.css';

function App() {


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

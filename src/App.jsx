import './bootstrap.css';

function App() {
   
    return (
    <div className='App'>
        <header className='App-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h2>Create new Ex</h2>
                                </div>
                                <div className="card-body">
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input type='text' className='form-control'></input>
                                        <small className='form-text text-muted'>Enter</small>
                                    </div>
                                    <div className='form-group'>
                                    <label>Type</label>
                                    <select class='form-control'>
                                        <option value='1'>Test</option>
                                        <option value='2'>Written</option>
                                        <option value='3'>Spoken</option>
                                    </select>
                                    <small className='form-text text-muted'>Select Ex type here.</small>
                                    </div>
                                    <div className='form-group'>
                                        <label>Place</label>
                                        <input type='text' className='form-control'></input>
                                        <small className='form-text text-muted'>Enter Ex type here.</small>
                                    </div>
                                    <button type='button' className='btn btn outline'</button>
                                </div>
                            </div>
                            <div className='col-8'>
                                One of three columns
                            </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}

export default App;

//ctrl + h

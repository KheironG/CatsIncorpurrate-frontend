import { useState, useEffect } from 'react';
import Presenter from './components/presenter/Presenter.js';
import './App.css';

function App() {

    const [ model, setModel ] = useState([]);

    useEffect(() => {
        const getCats = async () => {
          try {
            const response = await fetch( "http://localhost:4000/cats", { mode:'cors' } );
            const responseData = await response.json();
            setModel(responseData);
          } catch (error) {
            console.error(error);
          }
        };
        getCats();
    }, []);

  return (
    <div className="App">
          <header className="App-header">
                <h1>
                    Cats Incorpurrate
                    <sup>TM</sup>
                </h1>
                <p><em>Sorting your cats has never been easier.</em></p>
                { model.length === 0
                    ? ( 'loading' )
                    : ( <Presenter model={model.cats} /> )
                }
          </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Presenter from './components/presenter/Presenter';
import './App.scss';

const App = () => {

    const [ model, setModel ] = useState<Array<any> | undefined>(undefined);

    useEffect(() => {
        const getModel = async () => {
          try {
            const response = await fetch( "http://localhost:4000/cats", { mode:'cors' } );
            const responseData = await response.json();
            setModel(responseData.cats);
          } catch (error) {
            console.error(error);
          }
        };
        getModel();
    }, []);

  return (
    <div className="App">
          <header>
                <h1>
                    Cats Incorpurrate
                    <sup>TM</sup>
                </h1>
                <p><em>Sorting your cats has never been easier.</em></p>
          </header>
          <main>
              { model === undefined
                  ? ( 'loading cats...' )
                  : ( <Presenter model={model} /> )
              }
          </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import Cat from './Cat.js';
import Triggers from './Triggers.js';
import './App.css';

function App() {

    const cats = [
        { name: '1', src: '1.jpg' },
        { name: '2', src: '2.jpg' },
        { name: '3', src: '3.png' },
        { name: '4', src: '4.jpg' }
    ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Cats Incorpurrate
            <sup>TM</sup>
        </h1>
        <div className="UI">
            <Triggers />
            <div className="content">
            {cats.map(function(cat){
                return(
                    <Cat name={cat.name} src={cat.src} />
                )
            })}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import Presenter from './Presenter.js';
import './App.css';

function App() {

  const model = [
    {
      "name": "Parker",
      "image": "1.jpg",
      "cutenessLevel": 82,
      "allergyInducingFur": false,
      "livesLeft": 8
    },
    {
      "name": "Savage",
      "image": "2.jpg",
      "cutenessLevel": 47,
      "allergyInducingFur": false,
      "livesLeft": 2
    },
    {
      "name": "Ginger",
      "image": "3.jpg",
      "cutenessLevel": 20,
      "allergyInducingFur": false,
      "livesLeft": 9
    },
    {
      "name": "Farrell",
      "image": "4.jpg",
      "cutenessLevel": 76,
      "allergyInducingFur": false,
      "livesLeft": 1
    },
    {
      "name": "Bruce",
      "image": "5.jpg",
      "cutenessLevel": 96,
      "allergyInducingFur": false,
      "livesLeft": 9
    },
    {
      "name": "Casey",
      "image": "6.jpg",
      "cutenessLevel": 76,
      "allergyInducingFur": true,
      "livesLeft": 5
    },
    {
      "name": "Logan",
      "image": "7.jpg",
      "cutenessLevel": 36,
      "allergyInducingFur": true,
      "livesLeft": 8
    },
    {
      "name": "Malinda",
      "image": "8.jpg",
      "cutenessLevel": 93,
      "allergyInducingFur": true,
      "livesLeft": 8
    },
    {
      "name": "Mercer",
      "image": "9.jpg",
      "cutenessLevel": 28,
      "allergyInducingFur": false,
      "livesLeft": 1
    },
    {
      "name": "Melisa",
      "image": "10.jpg",
      "cutenessLevel": 42,
      "allergyInducingFur": false,
      "livesLeft": 2
    },
    {
      "name": "Lorie",
      "image": "11.jpg",
      "cutenessLevel": 59,
      "allergyInducingFur": true,
      "livesLeft": 8
    },
    {
      "name": "Vickie",
      "image": "12.jpg",
      "cutenessLevel": 22,
      "allergyInducingFur": true,
      "livesLeft": 5
    },
    {
      "name": "Mosley",
      "image": "13.jpg",
      "cutenessLevel": 74,
      "allergyInducingFur": false,
      "livesLeft": 2
    },
    {
      "name": "Walsh",
      "image": "14.jpg",
      "cutenessLevel": 81,
      "allergyInducingFur": false,
      "livesLeft": 7
    },
    {
      "name": "Pitts",
      "image": "15.jpg",
      "cutenessLevel": 97,
      "allergyInducingFur": false,
      "livesLeft": 2
    },
    {
      "name": "Eugenia",
      "image": "16.jpg",
      "cutenessLevel": 28,
      "allergyInducingFur": true,
      "livesLeft": 7
    },
    {
      "name": "Petty",
      "image": "17.jpg",
      "cutenessLevel": 77,
      "allergyInducingFur": false,
      "livesLeft": 7
    },
    {
      "name": "Gina",
      "image": "18.jpg",
      "cutenessLevel": 82,
      "allergyInducingFur": true,
      "livesLeft": 9
    },
    {
      "name": "Alba",
      "image": "19.jpg",
      "cutenessLevel": 58,
      "allergyInducingFur": true,
      "livesLeft": 8
    },
    {
      "name": "Helga",
      "image": "20.jpg",
      "cutenessLevel": 80,
      "allergyInducingFur": false,
      "livesLeft": 2
    },
    {
      "name": "Ophelia",
      "image": "21.jpg",
      "cutenessLevel": 79,
      "allergyInducingFur": true,
      "livesLeft": 3
    },
    {
      "name": "Alejandra",
      "image": "22.jpg",
      "cutenessLevel": 91,
      "allergyInducingFur": true,
      "livesLeft": 1
    },
    {
      "name": "Claudette",
      "image": "23.jpg",
      "cutenessLevel": 30,
      "allergyInducingFur": true,
      "livesLeft": 2
    },
    {
      "name": "Grimes",
      "image": "24.jpg",
      "cutenessLevel": 5,
      "allergyInducingFur": false,
      "livesLeft": 6
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Cats Incorpurrate
            <sup>TM</sup>
        </h1>
        <p><em>Choosing the right cat has never been easier.</em></p>
        <Presenter model={model} />
      </header>
    </div>
  );
}

export default App;

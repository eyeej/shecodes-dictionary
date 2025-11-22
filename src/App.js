import logo from './dictionaryheader.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Dictionary</h1>
        <a
          className="App-link"
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <footer>This Dictionary was Coded by Emma Yee-Joy is open-sourced on Github and is hosted on Netlify</footer>
    </div>
  );
}

export default App;

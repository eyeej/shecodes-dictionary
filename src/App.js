import logo from './dictionaryheader.jpg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 class="text-center">Dictionary</h1>
        <a
          className="App-link"
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <div class="text-center">This Dictionary was Coded by Emma Yee-Joy is open-sourced on Github and is hosted on Netlify</div></footer>
    </div>
  );
}

export default App;

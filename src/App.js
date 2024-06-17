import './App.css';
import Home from './Pages/Home'
import Header from './Components/layout/Header' 

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;

import NavBar from './components/NavBar';
import Filters from './components/Filters';
import Card from './components/Card';
import './styles/App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Filters />
     <Card />
    </div>
  );
}

export default App;

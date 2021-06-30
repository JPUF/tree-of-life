import './App.css';
import Taxon from './components/Taxon';

function App() {
  return (
    <div>
      <Taxon name="Borago" rank="Genus" />
      <Taxon name="Lamiaceae" rank="Family" />
      <Taxon name="Taxus baccata" rank="Species" />
    </div>
  );
}

export default App;

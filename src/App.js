import Nav from './components/Nav';
// import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ScooterCatalog from './pages/ScooterCatalog';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<ScooterCatalog />} />
      </Routes>
    </main>
  );
}

export default App;

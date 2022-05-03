import Nav from './components/Nav';
// import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import BikeCatalog from './pages/BikeCatalog';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<BikeCatalog />} />
      </Routes>
    </main>
  );
}

export default App;

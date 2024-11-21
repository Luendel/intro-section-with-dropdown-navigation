import './App.css';
import Navbar from './components/navbar/navbar';
import HeroImage from './components/heroImage/heroImage';
import HeroText from './components/heroText/heroText';

function App() {
  return (
    <main className="App container-fluid m-0 p-0">
      <Navbar />
      <HeroImage />
      <HeroText />
    </main>
  );
}

export default App;

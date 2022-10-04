import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Articles />
      <Footer />
    </div>
  );
}

export default App;

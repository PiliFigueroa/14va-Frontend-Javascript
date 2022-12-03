import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

// JSX => JS / XML
// Functional components - class components

const App = () => {

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;

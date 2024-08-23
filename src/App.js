import './App.css';
import Header from "./components/Header.jsx"
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import Footer from './components/Footer.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

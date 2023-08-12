import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <div className="font-righteous">
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        <Routes>
          <Route path='/' element={<Landing/>} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

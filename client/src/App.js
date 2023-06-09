import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/LandingPage/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import Create from './components/Create/Create.jsx';
import Modal from "react-modal";
import axios from 'axios';
axios.defaults.baseURL = 'https://videogamespi-production-bb05.up.railway.app/' //     http://localhost:3001/ https://videogamespi-production-bb05.up.railway.app/

Modal.setAppElement("#root");

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes> 
    </div>
  );
}

export default App;

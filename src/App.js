import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/appointment' element={<Appointment/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;

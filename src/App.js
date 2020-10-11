import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {NavBar, Footer} from './components/pages/bottom-top';
import './components/assets/css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/css/owl.carousel.min.css';
import './components/assets/css/owl.theme.default.min.css';
import './components/assets/css/magnific-popup.css';
import './components/assets/css/jquery.timepicker.css';
import './components/assets/css/flaticon.css';
import './components/assets/css/style.css';
import Home from './components/pages/home';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

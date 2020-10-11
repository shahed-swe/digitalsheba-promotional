import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Scripts from './components/pages/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Navbar from './components/pages/bottom-top';
import './components/assets/css/animate.css';
import './components/assets/css/owl.carousel.min.css';
import './components/assets/css/owl.theme.default.min.css';
import './components/assets/css/magnific-popup.css';
// import './components/assets/css/bootstrap-datepicker.css';
import './components/assets/css/jquery.timepicker.css';
import './components/assets/css/flaticon.css';
import './components/assets/css/style.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>
        Here we will write out main things
      </h1>
      <Scripts/>
    </div>
  );
}

export default App;

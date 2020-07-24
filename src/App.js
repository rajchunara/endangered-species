import React from 'react';
import './App.css';
import LandingComponent from './components/LandingComponent/LandingComponent';
import InfoContainer from './components/InfoContainer/InfoContainer';
import Footer from './components/Footer/Footer';
import Organization from './components/Organizations/Organization';

function App() {
  return (
    <div className="App">
      <LandingComponent />
      <InfoContainer />
      <Organization />
      <Footer />
    </div>
  );
}

export default App;

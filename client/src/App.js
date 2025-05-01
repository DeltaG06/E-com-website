import React from 'react';
import './App.css';
import Newnav from './components/newnavbaar/Newnav';
import Maincomponent from './components/home/Maincomponent';
import Navbaar from './components/header/Navbaar';

function App() {
  return (
    <>
    <Navbaar />
    <Newnav/>
    <Maincomponent/>
    </>
  );
}

export default App;

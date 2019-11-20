import React from 'react';
import './App.css';
import Tunes from './components/Tunes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <div>        
        <Tunes />        
      </div>
    </div>
  );
}

export default App;

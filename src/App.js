import logo from './logo.svg';
import './App.css';
import ComponentCha from './components/ComponentCha';
import ConvertRate from './components/ConvertRate';
import Refs from './components/Refs';
import ForwardRef from './components/ForwardRef';
import Component1 from './components/Component1';
import Component3 from './components/Component3';
import React from 'react';

function App() {
  const rate = 23235;
  return (
    <div>
        {/* <ComponentCha/> */}
        <ConvertRate rate={rate}/>
        <div style={{margin: '20px'}}>
          {/* <Refs /> */}
          {/* <ForwardRef /> */}
          <Component1 />
        </div>
    </div>
  );
}

export default App;

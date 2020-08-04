import React from 'react';

import './style.css';
import ProfilPhoto from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address' ;

function App() {
  return (
    <div className="App">
     <ProfilPhoto></ProfilPhoto>
     <FullName > </FullName>
     <Address> </Address>
    </div>
  );
}

export default App;

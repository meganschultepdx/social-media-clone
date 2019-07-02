import React from "react";
import Navbar from './Navbar';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

function App(){
  return (
    <div>
      <Navbar/>
      <LeftColumn/>
      <CenterColumn/>
      <RightColumn/>
    </div>
  );
}

export default App;
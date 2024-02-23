import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';

function App() {
  

  const [name,setname] = useState("edlawit");
 
useEffect(() =>{
 setname("belew")
},[])



  return (
   <div>
 <Nav name={name} />

    </div>
  );
}

export default App;

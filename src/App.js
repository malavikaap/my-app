

import React from 'react';
import Header from './Header';
import Food from './Food';
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Feedback from './Feedback';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Buttons from './Buttons';
// import Employees from './Employees';
// import UserGreeting from './UserGreeting';
// import List from './List';
// import ProfilePicture from './ProfilePicture';
// import HookComponent from './HookComponent';
//import Counter from './Counter';
// import Onchange from './Onchange';
// import ColorPicker from './ColorPicker';
// import UpdateObject from './UpdateObject';
// import ComponentA from './ComponentA';
//import Clock from "./DigitalClock"
//import TodoList from "./TodoList"
//import Calculator from "./Calculator"
//import StopWatch from "./StopWatch"
function App() {
  return(
    <>
    <Router>
      <div className='App'>
            <Header />
                <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Food />} />
                </Routes>
        </div>
    </Router>
    <Card/>
     <Card1/>
     <Card2/>
     <Card3/>
     <Footer/>
    {/*
    <ProfilePicture/>
    <HookComponent/>
    <Onchange/>
    <ColorPicker/>
    <UpdateObject/>
    <TodoList/>
    <ComponentA/>
    <Counter/>
    <StopWatch/>
    <Calculator/>
    <Clock/> 
    <Header/>
    */}
    
    </>
  )

}
export default App









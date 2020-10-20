import React from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Test from './Components/Test';
import Intro from './Components/Intro';
import Charity from './Components/Charity';
import {  Route, Switch } from 'react-router-dom';
import Graph from './Components/Graph';
import Blog from './Components/Blog';
import TestimonialsPage from './Components/Testimonials'



function App() {
  return (
  
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />
      <Route path='/login' component={Login} />
      {/* <Route component={Error} /> */}

    </Switch>
 );
}

function Home(){
  return (
    <>
     <Navbar/>
     <Intro/>
     <Test/>  

    
     
     </>
  )
}


export default App;

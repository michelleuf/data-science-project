import React from 'react';
import './App.css';
import * as d3 from 'd3';

// import Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import containers
import WorldRecords from './containers/worldRecords/WorldRecords';
import Statistic from './containers/statistic/Statistic';
import Prediction from './containers/prediction/Prediction';
// import services

export default function App() {
   return(
      <div>
         <div id="navbar">
            <NavBar />
         </div>
         <div id="content" class="mb-auto mx-20 my-10 mb-10 flex flex-col space-y-4 ...">
            <WorldRecords/>
            <Statistic/>
            <Prediction/>
         </div>
         <div id="footer">
            <Footer />
         </div>
      </div>
  )
}
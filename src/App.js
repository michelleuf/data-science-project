import logo from './logo.svg';
import React from 'react';
import './App.css';
import * as d3 from 'd3';
//test API
import testService from './services/test/test-service'; 

class App extends React.Component {
  constructor(props){
     super(props);
     this.myRef = React.createRef();
     this.testFunction(); 
  }
  componentDidMount(){
     console.log(this.myRef);
     d3.select(this.myRef.current)
     .append('p')
     .text('Hello d3');
  }
  render(){
   return (
     <div ref={this.myRef}>
     </div>
   );
  }

 testFunction(){
   testService.testFunction()
   .then(response => {
       this.setState({
         test: response.data,
       });
       console.log(response.data);
     })
     .catch(e => {
       console.log(e);
     });
   }
}
 export default App;

//import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/js/uikit-icons.js';
import './App.css';


//import AxiosApp from './apiaxios';
import ApiData from './apidata';
import Navbar from './Navbar';
import Footer from './footer';


class App extends Component {
 
render () {

 // console.log(457,this.state.ProductData);

  // console.log(56, ProductData)
  return (
    <React.Fragment>
    <Navbar />
    <br />
    <ApiData />  
    <br />
    <Footer />
    </React.Fragment>
  )
 }
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;

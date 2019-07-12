//import axios from 'axios';
import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import './App.css';
import {
 BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class DisplayGraph extends Component {
  state = {
    i: 0,
    interval: "",
    isUpdateClicked: false,
    
  }

  updateGraph = () => {

    if ( this.state.i === Object.keys(this.props.productData).length - 1){
      this.setState({i: 0, isUpdateClicked: false})
      clearInterval(this.state.interval);
    }
      
    if (this.state.isUpdateClicked) {
      this.setState({
        i: this.state.i + 1
      })
                                                                                                                                                                                                                                                                
    }
      
      
    }
     handleGraph = () => {
      this.setState({
        interval: setInterval(() => this.updateGraph(), 1000),
        isUpdateClicked: true
      
      })
      //console.log(65, this.state.i)
    }

   render() {
   
    const { productData } = this.props;

    var arrayl=[]
    var len,i, k;
    for (k in productData) {
      if (productData.hasOwnProperty(k)) {
        arrayl.push(k);
      }
    }
    
    arrayl.sort().reverse();

    //console.log(890, arrayl)
    
    len = arrayl.length;
    
    

   // console.log(900, productData);
    //console.log(23, new Date(1562630400000))

    //const arrayl = Object.keys(productData);
  
    //console.log(56, arrayl[this.state.i]);

     const dateformat = (arrayl[this.state.i])/1000;

     //productData[arrayl[this.state.i]].sort((a, b) => b.arrayl[this.state.i]-a.arrayl[this.state.i]);
    
    return (
      <div className="container center">
        
      <h3><Moment unix >{dateformat}</Moment>  </h3>
      
          <BarChart
            width={700} height={400} data={productData[arrayl[this.state.i]]}
            margin={{ top: 65, right: 30, left: 70, bottom: 75 }}
          >
          
            <XAxis dataKey="subcatName" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#283850" />
            
            

          </BarChart>

        
        {this.state.isUpdateClicked 
          ? <button className="btn" onClick={this.handleGraph} disabled> <i className="fa fa-pause"></i></button>
          : <button className="btn" onClick={this.handleGraph} > <i className ="fa fa-play"></i></button>
        }
        
      </div>
    );
  }
}

export default DisplayGraph;

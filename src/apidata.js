
import React, { Component } from 'react';
//import AxiosApp from './apiaxios'
//import DisplayData from './displaygraph';
import AxiosApp from './apiaxios';
//  import DisplayGraph from './displayGraph';
import DispalyData from './displayData';


class ApiData extends Component {
  state = {
    DATA: [
        {lastmdays : 2,
        interval : 24,
        topmcat:10}
    ]
  }


  axiosApp = (data) => {
    //ninja.id = Math.random();
    let DATA = [...this.state.DATA, data];
    this.setState({
      DATA:DATA
    });
  }

  render() {
    return (
      <div className="App">
       
        
        <AxiosApp axiosApp={this.axiosApp}/>
        
      </div>
    );
  }
}

export default ApiData;
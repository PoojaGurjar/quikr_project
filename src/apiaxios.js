//import axios from 'axios';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from "axios";
import Select from 'react-select';
import './App.css';
import DisplayGraph from './displayGraph';


class AxiosApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastmdays: 1,
      interval: 24,
      topmcat: 5,
      productData:[]
    };
  }

  componentDidMount() {
    //console.log(`http://localhost:5000/search/${this.state.lastmdays}/${this.state.interval}/${this.state.topmcat}`);
    axios
      .get(`http://localhost:5000/search/${this.state.lastmdays}/${this.state.interval}/${this.state.topmcat}`)
      .then(response => {
        this.setState({
          productData:response.data
        })})
      .catch(error => console.log(error));
  }

  componentWillUpdate(nextState) {
    // if (this.state.lastmdays !== nextState.lastmdays && this.state.interval !== nextState.interval && this.state.topmcat !== nextState.topmcat) {
      
  }

  handle1Change = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      lastmdays: e.value
    });
  }

  handle2Change = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      interval: e.value
    });
  }

  handle3Change = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      topmcat: e.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.axiosApp(this.state);
    axios
        .get(`http://localhost:5000/search/${this.state.lastmdays}/${this.state.interval}/${this.state.topmcat}`)
        .then(response => {
          this.setState({
            productData: response.data
          })
        })
        .catch(error => console.log(error));
  }



  render() {


    const lastdays = [
      { label: "last 3 days", value: 3 },
      { label: "last 6 days", value: 6 },
      { label: "last 7 days", value: 7 },
      { label: "last 12 days", value: 12},
      { label: "last 14 days", value: 14 },
      { label: "last 24 days", value: 24 },
    ]; 
    
    const intervalhour = [
      { label: "3 hour interval", value: 3 },
      { label: "6 hour interval", value: 6 },
      { label: "9 hour interval", value: 9 },
      { label: "12 hour interval", value: 12},
      { label: "18 hour interval", value: 18 },
      { label: "21 hour interval", value: 21 },
      { label: "24 hour interval", value: 24 },
    ]; 
    
    const topcat = [
      { label: "top 4 catagory", value: 4 },
      { label: "ltop 8 catagory", value: 8 },
      { label: "top 12 catagory", value: 12 },
      { label: "top 16 catagory", value: 16},
      { label: "top 20 catagory", value: 20 },
      { label: "top 24 catagory", value: 24 },
    ]; 
    // const productData = this.state.productData
    //console.log(90, this.state)
    //console.log('keys', Object.keys(this.state.productData))
    return (
      <div className="container"> 
        <br />
        <form className="container" onSubmit={this.handleSubmit}>
          <label htmlFor="lastmdays">Last N Days:
          <Select options={lastdays} placeholder="last 1 day" id="lastmdays" onChange={(e) => this.handle1Change(e)}></Select>
          </label>
         
          <br/>
          <label htmlFor="interval">Time Interval(hour):
          <Select options={intervalhour} placeholder=" 24 hour interval" id="interval" onChange={(e) => this.handle2Change(e)}></Select>
          </label>
          <br/>
          <label htmlFor="topmcat">Number of Top Catagories:
          <Select options={topcat} placeholder="top 5 catagory" id="lastmdays" onChange={(e) => this.handle3Change(e)}></Select>

          </label>
          <br />
          <button className="btn">Submit</button>
        </form>
        <br />
        
        <DisplayGraph  productData = {this.state.productData} />
      </div>
    );
  }
}

export default AxiosApp;

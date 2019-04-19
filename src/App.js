import React, { Component } from 'react';
import axios from "axios"

import './App.css';

import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      product: {}
    }

    this.getInventory = this.getInventory.bind(this)

  }

  getInventory() {
    axios.get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} />
        <Form getInventory={this.getInventory} product={this.state.product} />

      </div>
    );
  }
}

export default App;



// componentDidMount() {
//   axios.get("/api/inventory")
//     .then(res => {
//       this.setState({
//         inventory: res.data
//       })
//     })
// }
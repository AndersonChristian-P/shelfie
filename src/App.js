import React, { Component } from 'react';

import './App.css';

import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          name: "shoes",
          price: 50.26,
          imageUrl: "https://assets.adidas.com/images/h_600,f_auto,q_auto:sensitive,fl_lossy/6a8f277daf5f4748a739a998016785f4_9366/Asweerun_Shoes_White_F36340_01_standard.jpg"
        },
        {
          name: "jeans",
          price: 20.32,
          imageUrl: "https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/2082147_1303.jpg"
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />

      </div>
    );
  }
}

export default App;

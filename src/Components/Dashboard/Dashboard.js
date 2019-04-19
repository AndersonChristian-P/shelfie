import React, { Component } from "react"

import Product from "../Product/Product"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: this.props.inventory,
      imageUrl: "",
      name: "",
      price: 0
    }
  }

  handleChange = (event) => {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClickCancel = () => {
    this.setState({
      imageUrl: "",
      name: "",
      price: 0
    })
  }

  render() {

    let inventoryList = this.state.inventory.map((product, i) => {
      return <Product key={i} >{}</Product>
    })

    return (
      <div>
        {inventoryList}

        <div>Image URL:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.imageUrl}
            name="imageUrl"
          />
        </div>

        <div>Product Name:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            name="name"
          />
        </div>

        <div>Price:
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.price}
            name="price"
          />
        </div>

        <button onClick={this.handleClickCancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}
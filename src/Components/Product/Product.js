import React, { Component } from "react"

export default class Product extends Component {
  constructor() {
    super()

    this.state = {
      imageUrl: "",
      product_name: "",
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
      product_name: "",
      price: 0
    })
  }

  render() {
    return (
      <div>
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
            value={this.state.product_name}
            name="product_name"
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
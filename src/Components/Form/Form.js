import React, { Component } from "react"

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      image: ""
    }

    this.handleClickCancel = this.handleClickCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClickCancel() {
    console.log(this.state)
    this.setState({
      name: "",
      price: 0,
      image: ""
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
            name="image"
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
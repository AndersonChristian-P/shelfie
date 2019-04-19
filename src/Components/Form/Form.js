import React, { Component } from "react"
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      price: 0,
      image: ""
    }

    this.handleClickCancel = this.handleClickCancel.bind(this)
  }

  handleChange = (event) => {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClickCancel() {
    this.setState({
      name: "",
      price: 0,
      image: "",
      id: null
    })
  }

  handleClickAdd = () => {
    let body = this.state
    axios.post(`/api/product`, body)
      .then(this.props.getInventory)
    this.handleClickCancel()
  }

  componentDidUpdate() {

  }


  render() {
    return (
      <div>
        <img width="200" src={this.state.image} alt="" />
        <div>Image URL:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.image}
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
        <button onClick={this.handleClickAdd} >Add to Inventory</button>
      </div>
    )
  }
}
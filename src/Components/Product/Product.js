import React, { Component } from "react"

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: this.props.product.image,
      name: this.props.product.name,
      price: this.props.product.price
    }
  }

  render() {
    return (
      <div>
        <img width="200" src={this.state.image} alt="#" />
        <div>
          <div>{this.state.name}</div>
          <div>{`${this.state.price}`}</div>
        </div>
      </div>
    )
  }
}
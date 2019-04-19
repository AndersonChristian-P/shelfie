import React, { Component } from "react"

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: this.props.product.img,
      name: this.props.product.name,
      price: this.props.product.price,
      id: this.props.product.product_id
    }
  }

  handleClick = () => {
    let id = this.state.id
    this.props.deleteProduct(id)
  }

  render() {

    let { image, name, price } = this.state

    return (
      <div>
        <img width="200" src={`${image}`} alt="#" />
        <div>
          <div>{name}</div>
          <div>{`$${price}`}</div>
        </div>

        <div>
          <button onClick={this.handleClick} >Delete</button>
        </div>
      </div>
    )
  }
}


// this.props.deleteProduct(id)

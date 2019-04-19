import React, { Component } from "react"

import Product from "../Product/Product"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: this.props.inventory
    }
  }

  render() {

    let inventoryList = this.state.inventory.map((product, i) => {
      return <Product key={i} product={product}></Product>
    })

    return (
      <div>
        <div>
          {inventoryList}
        </div>
      </div>
    )
  }
}
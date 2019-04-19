import React, { Component } from "react"

import Product from "../Product/Product"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    let inventoryList = this.props.inventory.map((product, i) => {
      return <Product key={i} product={product} />
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
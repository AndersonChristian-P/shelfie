import React, { Component } from "react"

import Product from "../Product/Product"
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`)
      .then(this.props.getInventory)
  }

  render() {

    let inventoryList = this.props.inventory.map((product, i) => {
      return <Product key={i} product={product} deleteProduct={this.deleteProduct} />
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
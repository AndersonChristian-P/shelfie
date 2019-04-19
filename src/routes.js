import React from "react"
import { Switch, Route } from "react-route-dom"

export default (
  <Switch>
    <Route exact path="/" />
    <Route path="/add" />
    <Route path="/edit/:id" />

  </Switch>
)
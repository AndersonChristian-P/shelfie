require("dotenv").config()
const express = require("express")
const massive = require("massive")

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

const productCtrl = require("./controller")

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance)
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})
  .catch(err => {
    console.log(`massive err ${err}`)
  })

app.get("/api/inventory", productCtrl.request)
app.post("/api/product", productCtrl.create)

app.delete("/api/inventory/:id", productCtrl.delete)

app.put("/api/inventory/:id", productCtrl.)
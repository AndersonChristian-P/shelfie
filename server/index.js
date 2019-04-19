const express = require("express")

const app = express()
const port = 5356

const productCtrl = require("./controller")

app.use(express.json())



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


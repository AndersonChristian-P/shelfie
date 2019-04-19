module.exports = {

  request: (req, res) => {
    const db = req.app.get("db")
    db.get_inventory()
      .then(response => {
        res.status(200).send(response)
      })
  },

  create: (req, res) => {
    const db = req.app.get("db")
    let { name, price, image } = req.body
    db.create_product([name, price, image])
      .then(response => {
        res.status(200).send(response)
      })
  }


}
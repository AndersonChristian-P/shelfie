module.exports = {

  request: (req, res) => {
    const db = req.app.get("db")
    db.get_inventory()
      .then(response => {
        res.status(200).send(response)
      })
    // .catch(err => {
    //   res.status(500).console.log(`request err ${err}`)
    // })
  }


}
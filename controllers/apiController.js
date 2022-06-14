const Item = require('../models/item');

module.exports = {
  landingPage: async (req, res) => {
    const mostPicked = Item.find()
      .select('_id title country city price unit')
      .limit(5);

    res.status(200).json({ mostPicked });
  },
};

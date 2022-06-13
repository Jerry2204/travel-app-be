module.exports = {
  landingPage: (req, res) => {
    const message = 'Hello JSON';
    res.status(200).json({ message });
  },
};

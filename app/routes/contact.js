module.exports = app => {
  app.get("/contact", (req, res) => {
    res.render("contact/contact");
  });
};

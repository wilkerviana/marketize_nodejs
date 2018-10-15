module.exports = app => {
  app.get("/mylists", (req, res) => {
    res.render("lists/lists");
  });
};

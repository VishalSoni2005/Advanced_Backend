const UrlModel = require("../Models/ModelOne.js");

exports.getHome = async (req, res, next) => {
  try {
    const urls = await UrlModel.find(); // first get urls
    res.render("index", { urls }); // render home page with urls
    //! { url } is used to pass the url array to html index.ejs file
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.createShortUrl = async (req, res) => {
  try {
    const { fullUrl } = req.body;
    const url = await UrlModel.create({ fullUrl });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.redirectToFullUrl = async (req, res) => {
  try {
    const url = await UrlModel.findOne({ shortUrl: req.params.shortUrl });
    if (!url) {
      return res.status(404).send("URL not found");
    }
    url.clicks++;
    await url.save();
    res.redirect(url.fullUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

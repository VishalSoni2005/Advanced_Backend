const fileModel = require('../models/File');

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("Flie Came Sir ===> ", file);

    // defining path of upload
    const filePath = __dirname + "/files/" + "uploaded_" + file.name;

    // uploading file
    file.mv(filePath, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
    });

    res.json({
      message: "😊File uploaded successfully",
      filePath: filePath,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

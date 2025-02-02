const cloudinary = require("cloudinary").v2;
const File = require("../models/File");

// Utility function to validate file types
function isValidFileType(fileName, supportedTypes) {
  const fileExtension = fileName.split(".").pop().toLowerCase();
  return supportedTypes.includes(fileExtension);
}

// Utility function to upload files to Cloudinary
async function uploadToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto"; //todo: important to detect file type
  if (quality) {
    options.quality = quality; //todo: important to compress file size
  }
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.localFileUpload = async (req, res) => {
  try {
    // fetching the file from the server
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

exports.imageUpload = async (req, res) => {
  try {
    // fetching the file from the server
    const { name, tag, email } = req.body;
    console.log("Flie Came Sir ===> ", name, tag, email);

    // taking image form request
    const file = req.files.imageFile;
    console.log(file);

    //* image expenstion validation
    const supportedType = ["jpg", "png", "svg", "gif", "jpeg"];

    const reqFileType = file.name.split(".")[1].toLowerCase(); //todo: give extension
    if (!isValidFileType(reqFileType, supportedType)) {
      return res.status(400).json({
        sucess: false,
        msg: "Invalid file type",
      });
    }

    console.log("hi"); // perfect till this step

    // now file is supported
    // now file is uploaded to cloudinary server

    const response = await uploadToCloudinary(file, "VishalSoni");
    console.log(response);

    // // db entry
    // const newFile = new File({
    //   name,
    //   imageURL: response.secure_url,
    //   tag,
    //   email,
    // });
    // await newFile.save();
    // console.log("File saved to DB");

    // deleting local file
    // fs.unlink(file.tempFilePath, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    res.status(200).json({
      msg: "File uploaded successfully",
      imageURL: response.secure_url,
      sucess: true,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Errror fetching file",
      sucess: false,
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    // fetching the file from the server
    const { name, tag, email } = req.body;
    console.log("Flie Came Sir ===> ", name, tag, email);

    // taking video form request
    const file = req.files.videoFile;
    console.log(file);

    // //* video expenstion validation
    const supportedTypes = ["mp4", "avi", "mov", "wmv"];

    // const reqFileType = file.name.split(".")[1].toLowerCase(); //todo: give extension
    // if (!isValidFileType(reqFileType, supportedType)) {
    //   return res.status(400).json({
    //     sucess: false,
    //     msg: "Invalid file type",
    //   });
    // }

    // Extract file extension
    const fileExtension = file.name.split(".").pop().toLowerCase();

    // Validate file type
    if (!supportedTypes.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        message: `Invalid file type. Supported types: ${supportedTypes.join(
          ", ",
        )}`,
      });
    }

    console.log("helo file");

    // upload the file
    const response = await uploadToCloudinary(file, "VishalSoni");
    console.log("Video uploaded to cloudinary", response);

    // db entry
    // const newFile = new File({
    //   name,
    //   imageURL: response.secure_url,
    //   tag,
    //   email,
    // });
    // await newFile.save();
    // console.log("File saved to DB");

    res.status(200).json({
      msg: "File uploaded successfully",
      videoURL: response.secure_url,
      sucess: true,
    });
  } catch (error) {
    console.log("Error {catch Block} uploading video", error);

    res.status(404).json({
      msg: "Errror fetching file",
      sucess: false,
    });
  }
};

exports.imageReduceUpload = async (req, res) => {
  try {
    // fetching the file from the server
    const { name, tag, email } = req.body;
    console.log("Flie Came Sir ===> ", name, tag, email);

    // taking image form request
    const file = req.files.imageFile;
    console.log(file);

    //* image expenstion validation
    const supportedType = ["jpg", "png", "svg", "gif", "jpeg"];

    const reqFileType = file.name.split(".")[1].toLowerCase(); //todo: give extension
    if (!isValidFileType(reqFileType, supportedType)) {
      return res.status(400).json({
        sucess: false,
        msg: "Invalid file type",
      });
    }

    console.log("hi"); // perfect till this step

    // now file is supported
    // now file is uploaded to cloudinary server

    const response = await uploadToCloudinary(file, "VishalSoni", 10);
    console.log(response);

    // // db entry
    // const newFile = new File({
    //   name,
    //   imageURL: response.secure_url,
    //   tag,
    //   email,
    // });
    // await newFile.save();
    // console.log("File saved to DB");

    // deleting local file
    // fs.unlink(file.tempFilePath, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    res.status(200).json({
      msg: "File uploaded successfully",
      imageURL: response.secure_url,
      sucess: true,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Errror fetching file",
      sucess: false,
    });
  }
};

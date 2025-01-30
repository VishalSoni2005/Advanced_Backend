const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//* Register the user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //todo: checking if the user is already registered
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ msg: "This email already exists." });

    //todo: if not then , hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save(); // for saving the user in the database
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

//* Login the user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the user
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Password" });

    // generate a jwt token
    const token = jwt.sign({ userId: user._id }, "Your_JWT_Token", {
      expiresIn: "1h",
    });

    //res.json({ token });//! this is creating issue
    // Store the token in a cookie
    res.cookie("token", token, { httpOnly: true });

    // Redirect to the homepage
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

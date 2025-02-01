const UserModel = require("../Models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate input fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create JWT payload
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // Generate JWT token
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2 days",
    });

    // Attach token to user (optional)
    user.token = token;
    user.password = undefined; // Remove password from response

    // Set token in cookie and send response
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      })
      .status(200)
      .json({ message: "User logged in successfully", user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
};

exports.logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "User logged out successfully" });
};

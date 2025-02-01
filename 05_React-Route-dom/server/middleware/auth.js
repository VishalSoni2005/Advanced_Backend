const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token = req.body.token || req.headers.authorization?.split(" ")[1];

    console.log("Extracted Token:", token);

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token is not provided",
      });
    }

    // Verify token
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      console.log("Decoded Payload:", payload);

      // Validate payload
      if (!payload.email || !payload.role) {
        return res.status(403).json({
          success: false,
          message: "Invalid token payload",
        });
      }

      req.user = payload;
      next();
    } catch (e) {
      console.error("JWT Verification Error:", e.message);
      return res.status(403).json({
        success: false,
        message: "Token verification failed",
      });
    }
  } catch (e) {
    console.error("Auth Middleware Error:", e.message);
    return res.status(403).json({
      success: false,
      message: "Token is not valid",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    const requestSent = req.body.role;
    if (requestSent === "student") {
      return res.status(200).json({
        success: true,
        message: "You are authenticated for student access",
      });
    }
    next();
  } catch (e) {
    res.status(403).json({
      success: false,
      message: "You are not a student",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const requestSent = req.body.role;
    if (requestSent === "admin") {
      return res.status(200).json({
        success: true,
        message: "You are authenticated for admin access",
      });
    }
    next();
  } catch (e) {
    res.status(403).json({
      success: false,
      message: "You are not an admin",
    });
  }
};

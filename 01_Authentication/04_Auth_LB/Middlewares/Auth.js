const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");

exports.auth = async (req, res, next) => {
  try {
    console.log("Cookie =>>> ", req.cookies);
    console.log("Body =>>> ", req.body);

    // Extract token from body, cookies, or headers
    const token =
      req.body.token ||
      req.cookies.token ||
      (req.headers.authorization &&
        req.headers.authorization.replace("Bearer ", ""));

    console.log("token =>>> ", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    try {
      // Verify token
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      // Validate payload structure
      if (!payload.email || !payload.role) {
        return res.status(401).json({
          success: false,
          message: "Invalid token payload",
        });
      }

      // Attach user to request object
      req.user = payload;
      next();
    } catch (error) {
      // Handle token expiration
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Token expired",
        });
      }
      // Handle other token errors
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.role !== "student") {
      return res.status(403).json({
        success: false,
        message: "This is a protected route for students",
      });
    }
    next();
  } catch (error) {
    console.error("isStudent middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "This is a protected route for admin",
      });
    }
    next();
  } catch (error) {
    console.error("isAdmin middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");

// // auth, isStudent, isAdmin

// // exports.auth = async (req, res, next) => {
// //   try {
// //     // extract jwt token
// //     const token = req.body.token;

// //     if (!token) {
// //       return res.status(401).json({
// //         success: false,
// //         message: "Token not provided",
// //       });
// //     }

// //     try {
// //       // verify token
// //       const payload = jwt.verify(token, process.env.JWT_SECRET); // this decoded stores the token in the session

// //       // attach user to request object
// //       req.user = payload; //* storing user details
// //       next();
// //     } catch (error) {
// //       res.status(401).json({
// //         success: false,
// //         message: "Invalid token",
// //       });
// //     }
// //   } catch (error) {
// //     res.status(401).json({
// //       success: false,
// //       message: "auth middleware error",
// //     });
// //     next();
// //   }
// // };

// exports.auth = async (req, res, next) => {
//   try {

//     console.log("Cookie =>>> ", req.cookies);
//     console.log("Body =>>> ", req.body);

//     // Extract token from body, cookies, query, or headers
//     const token = req.body.token || req.cookies.token || req.headers("Authorization").replace("Bearer ", "");

//     console.log("token =>>> ", token);

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Token not provided",
//       });
//     }

//     try {
//       // Verify token
//       const payload = jwt.verify(token, process.env.JWT_SECRET);

//       // Validate payload structure
//       if (!payload.email) {
//         return res.status(401).json({
//           success: false,
//           message: "Invalid token payload",
//         });
//       }

//       // Attach user to request object
//       req.user = payload;
//       next();
//     } catch (error) {
//       // Handle token expiration
//       if (error.name === "TokenExpiredError") {
//         return res.status(401).json({
//           success: false,
//           message: "Token expired",
//         });
//       }
//       // Handle other token errors
//       return res.status(401).json({
//         success: false,
//         message: "Invalid token",
//       });
//     }
//   } catch (error) {
//     console.error("Auth middleware error:", error);
//     return res.status(401).json({
//       success: false,
//       message: "Auth middleware error",
//     });
//   }
// };

// exports.isStudent = async (req, res, next) => {
//   try {
//     if (req.user.role !== "student") {
//       return res.status(401).json({
//         success: false,
//         message: "this is protected route for students",
//       });
//     }
//     next();
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized",
//     });
//     next();
//   }
// };

// exports.isAdmin = async (req, res, next) => {
//   try {
//     if (req.user.role !== "admin") {
//       return res.status(401).json({
//         success: false,
//         message: "this is protected route for admin",
//       });
//     }
//     next();
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized",
//     });
//     next();
//   }
// };

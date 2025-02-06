const express = require("express");
const router = express.Router();
const { login, signup } = require("../Controllers/Controller");
const { auth, isStudent, isAdmin } = require('../Middlewares/Auth.js')

router.post("/signup", signup);
router.post("/login", login);

// testing routes
router.get("/auth", auth, (req, res) => {
  // fist auth then protected
  res.json({
    success: true,
    message: "You are authenticated to join as a protected route",
    user: req.user,
  });
});

// protected routes
router.get("/student", auth, isStudent, (req, res) => {
  // fist auth then isStudent
  res.json({
    success: true,
    message: "You are authenticated to join as a student",
    user: req.user,
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  // fist auth then isAdmin
  res.json({
    success: true,
    message: "You are authenticated to join as an admin",
    user: req.user,
  });
});

module.exports = router;



// const express = require("express");
// const router = express.Router();
// const { login, signup } = require("../Controllers/Controller");
// const { auth, isStudent, isAdmin } = require("../Middlewares/Auth.js");

// // Render signup page
// router.get("/signup", (req, res) => {
//   res.render("signup", { title: "Sign Up", error: null });
// });

// // Render login page
// router.get("/login", (req, res) => {
//   res.render("login", { title: "Login", error: null });
// });

// // Handle signup form submission
// router.post("/signup", async (req, res) => {
//   try {
//     await signup(req, res); // Call your existing signup function
//     res.redirect("/login");
//   } catch (error) {
//     res.render("signup", { title: "Sign Up", error: error.message });
//   }
// });

// // Handle login form submission
// router.post("/login", async (req, res) => {
//   try {
//     await login(req, res); // Call your existing login function
//     res.redirect("/dashboard");
//   } catch (error) {
//     res.render("login", { title: "Login", error: error.message });
//   }
// });

// // Protected Dashboard Route
// router.get("/dashboard", auth, (req, res) => {
//   res.render("dashboard", { title: "Dashboard", user: req.user });
// });

// // Student Protected Route
// router.get("/student", auth, isStudent, (req, res) => {
//   res.render("student", { title: "Student Dashboard", user: req.user });
// });

// // Admin Protected Route
// router.get("/admin", auth, isAdmin, (req, res) => {
//   res.render("admin", { title: "Admin Dashboard", user: req.user });
// });

// // Logout Route
// router.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.redirect("/login");
//   });
// });

// module.exports = router;

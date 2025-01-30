const fs = require("fs");
const path = require("path");


function logFile(filename) {
  return (req, res, next) => {
    const logPath = path.join(__dirname, filename); // Ensure correct path
    const logEntry = `\n${req.method} ${req.url} ${new Date().toISOString()}\n`;

    // Ensure the log file exists (or create it)
    fs.appendFile(logPath, logEntry, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
      next();
    });
  };
}

module.exports = logFile;

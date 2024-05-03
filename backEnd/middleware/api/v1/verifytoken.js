const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    /*
    const token =
      req.header("authorization") && req.header("authorization").split(" ")[1];
*/
    const token = req.cookies.jwt || req.header("Authorization");

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({
            succeeded: false,
            error: "No token available",
          });
        } else {
          next();
        }
      });
    } else {
      return res.status(401).json({
        succeeded: false,
        error: "No token available",
      });
    }
  } catch (error) {
    res.status(401).json({
      succeeded: false,
      error: "Not authorized",
    });
  }
};

module.exports = verifyToken;

/*
if (!token)
  return res.status(401).json({
    succeeded: false,
    error: "No token available",
  });

req.user = await User.findById(
  jwt.verify(token, process.env.JWT_SECRET).userId
);
next();
*/

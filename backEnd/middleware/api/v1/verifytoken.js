const jwt = require("jsonwebtoken");
const User = require("../../../models/User");

/*
function verifyToken(req, res, next) {
  const token = req.header("authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
*/
const verifyToken = async (req, res, next) => {
  try {
    /*
    const token =
      req.header("authorization") && req.header("authorization").split(" ")[1];
*/
    const token = req.cookies.jwt && req.header("authorization") && req.header("authorization").split(" ")[1];

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          console.log(err.message);
          return res.status(401).json({
            succeeded: false,
            error: "No token available",
          });
        } else {
          next();
        }
      });
    }else {
      res.status(401).json({
        succeeded: false,
        error: "No token available",
      });
    }
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
  } catch (error) {
    res.status(401).json({
      succeeded: false,
      error: "No authorized",
    });
  }
};

module.exports = verifyToken;

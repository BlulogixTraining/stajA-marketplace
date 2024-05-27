const User = require("../../../models/User");

function checkRole(roles) {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      if (!roles.includes(user.role)) {
        return res.status(403).json({ error: "You cannot access this because of the role's middleware!" });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
}

module.exports = checkRole;

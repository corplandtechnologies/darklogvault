const authRoutes = require("../auth.routes");
const userRoutes = require("../user.routes");

const useRoutes = (app) => {
  BASE_URL = "api/v1";

  app.use(`/${BASE_URL}/auth`, authRoutes);
  app.use(`/${BASE_URL}/users`, userRoutes);
};

module.exports = useRoutes;

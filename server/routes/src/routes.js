const authRoutes = require("../auth.routes");

const useRoutes = (app) => {
  BASE_URL = "api/v1";

  app.use(`/${BASE_URL}/auth`, authRoutes);
};

module.exports = useRoutes;

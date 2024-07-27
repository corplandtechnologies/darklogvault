const authRoutes = require("../auth.routes");
const userRoutes = require("../user.routes");
const adminRoutes = require("../admin.routes");
const orderRoutes = require("../order.routes");

const useRoutes = (app) => {
  BASE_URL = "api/v1";

  app.use(`/${BASE_URL}/auth`, authRoutes);
  app.use(`/${BASE_URL}/users`, userRoutes);
  app.use(`/${BASE_URL}/admin`, adminRoutes);
  app.use(`/${BASE_URL}/orders`, orderRoutes);
};

module.exports = useRoutes;

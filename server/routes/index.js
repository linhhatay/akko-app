const AppError = require("../utils/appError");
const globalErrorHandler = require("../controllers/errorController");
const userRouter = require("./userRoutes");
const productRouter = require("./productRoutes");

function route(app) {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/products", productRouter);

  app.all("*", (req, res, next) => {
    next(
      new AppError(`Can't not  find ${req.originalUrl} on this server!`, 404)
    );
  });
  app.use(globalErrorHandler);
}

module.exports = route;

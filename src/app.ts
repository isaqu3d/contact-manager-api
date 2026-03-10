import { apiReference } from "@scalar/express-api-reference";
import express from "express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(express.json());

app.get("/openapi.json", (_req, res) => {
  res.json(swaggerSpec);
});

app.use(
  "/docs",
  apiReference({
    url: "/openapi.json",
    theme: "purple",
  }),
);

export default app;

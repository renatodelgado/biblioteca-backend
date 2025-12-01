import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

app.use("/api", routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized!");
    app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
  })
  .catch((err) => console.error("Erro ao inicializar DB:", err));

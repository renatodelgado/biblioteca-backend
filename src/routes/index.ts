import { Router } from "express";
import livroRoutes from "./livro.route";

const router = Router();

router.get("/", (req, res) => res.json({ ok: true, service: "biblioteca-api" }));

router.use("/livros", livroRoutes);

export default router;

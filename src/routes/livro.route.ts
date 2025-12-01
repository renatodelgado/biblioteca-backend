import { Router } from "express";
import { LivroController } from "../controllers/livro.controller";

const router = Router();

router.get("/", LivroController.index);
router.get("/:id", LivroController.show);
router.post("/", LivroController.create);
router.put("/:id", LivroController.update);
router.delete("/:id", LivroController.delete);

export default router;

import { Request, Response } from "express";
import { LivroRepository } from "../repositories/livro.repository";

export const LivroController = {
  async index(req: Request, res: Response) {
    const livros = await LivroRepository.find();
    return res.json(livros);
  },

  async show(req: Request, res: Response) {
    const livro = await LivroRepository.findOneBy({ id: Number(req.params.id) });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });
    return res.json(livro);
  },

  async create(req: Request, res: Response) {
    const livro = LivroRepository.create(req.body);
    await LivroRepository.save(livro);
    return res.status(201).json(livro);
  },

  async update(req: Request, res: Response) {
    const livro = await LivroRepository.findOneBy({ id: Number(req.params.id) });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });

    LivroRepository.merge(livro, req.body);
    await LivroRepository.save(livro);
    return res.json(livro);
  },

  async delete(req: Request, res: Response) {
    const livro = await LivroRepository.findOneBy({ id: Number(req.params.id) });
    if (!livro) return res.status(404).json({ error: "Livro não encontrado" });

    await LivroRepository.remove(livro);
    return res.status(204).send();
  },
};

import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Produto {
    async criar(req: Request, res: Response) {
        try {
            const { titulo, categoria, preco, desconto, disponivel } = req.body;
            const produto = await prisma.produto.create({
                data:
                {
                    titulo,
                    categoria,
                    preco,
                    desconto,
                    disponivel,
                }
            });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: "Error ao criar o produto." })
        }
    }
    async listar(req: Request, res: Response) {
        try {
            const produto = await prisma.produto.findMany();
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: "Error ao listar produtos." })
        }
    };
    async deletarTodos(req: Request, res: Response) {
        try {
            const produto = await prisma.produto.deleteMany();
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    async deletar(req: Request, res: Response) {
        const id = req.params;
        try {
            const produto = await prisma.produto.delete({
                where: { id: Number(id) }
            });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    async listarUnico(req: Request, res: Response) {
        const id = req.params;
        try {
            const produto = await prisma.produto.findUnique({
                where: { id: Number(id) }
            });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    async atualizar(req: Request, res: Response) {
        const id = req.params;
        const { titulo, categoria, preco, desconto, disponivel } = req.body;
        try {
            const produto = await prisma.produto.update({
                data:
                {
                    titulo,
                    categoria,
                    preco,
                    desconto,
                    disponivel
                },
                where: { id: Number(id) }
            });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export const produto = new Produto();

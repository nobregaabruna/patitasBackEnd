import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Comprador {
    async criar(req: Request, res: Response) {
        try {
            const { nome, email, cep, celular, pagamento } = req.body;
            const user = await prisma.comprador.create({
                data:
                {
                    nome,
                    email,
                    cep,
                    celular,
                    pagamento,
                }
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Error ao criar o usuário." })
        }
    }
    async listar(req: Request, res: Response) {
        try {
            const users = await prisma.comprador.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: "Error ao listar usuários." })
        }
    };
    async deletarTodos(req: Request, res: Response) {
        try {
            const users = await prisma.comprador.deleteMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error})
        } 
    }
    async deletar(req: Request, res: Response) {
        const id = req.params ;
        try {
            const users = await prisma.comprador.delete({ 
                where: { id: Number (id) }
            }) ;
            res.status(200).json(users);
        } catch(error) {
            res.status(500).json({ error: error})
        }
    }
    async listarUnico(req: Request, res: Response){
        const id = req.params ;
        try {
            const users = await prisma.comprador.findUnique({ 
                where: { id: Number (id) }
            }) ;
            res.status(200).json(users);
        } catch(error) {
            res.status(500).json({ error: error})
        }
    }
    async atualizar(req: Request, res: Response){
        const id = req.params ;
        const { nome, email, cep, celular, pagamento } = req.body;
        try {
            const users = await prisma.comprador.update({ data:
                {
                    nome,
                    email,
                    cep,
                    celular,
                    pagamento
                },
                where: { id: Number (id) }
            }) ;
            res.status(200).json(users);
        } catch(error) {
            res.status(500).json({ error: error})
        }
    }
}

export const comprador = new Comprador();





import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Relacao ('/produto/:idProduto/relacao/carrinho/:idCarrinho', async (req: Request, res: Response) => {
  const { idProduto, idCarrinho } = req.params;

  try {
    const produto = await prisma.produto.findUnique({ where: { id: parseInt(idProduto) } });
    const carrinho = await prisma.carrinho.findUnique({ where: { id: parseInt(idCarrinho) } });

    if (!produto || !carrinho) {
      return res.status(404).json({ error: 'Produto ou carrinho não encontrado.' });
    }

    return res.status(201).json({ message: 'Relação criada com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

app.delete('/produto/:idProduto/relacao/objetoB/:idCarrinho', async (req: Request, res: Response) => {
  const { idProduto, idCarrinho } = req.params;

  try {
    const produto = await prisma.produto.findUnique({ where: { id: parseInt(idProduto) } });
    const carrinho = await prisma.carrinho.findUnique({ where: { id: parseInt(idCarrinho) } });

    if (!produto || !carrinho) {
      return res.status(404).json({ error: 'Produto ou carrinho não encontrado' });
    }
    return res.status(200).json({ message: 'Relação removida com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
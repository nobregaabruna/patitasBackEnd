import { Router } from "express";
import { comprador } from "../controllers/controllerComprador";

const router: Router = Router()

//Rotas usuário

// Criar usuário
router.post('/users', comprador.criar);

// Obter todos os usuários
router.get('/users', comprador.listar);

// Obter usuário por ID recuperar
router.get('/users/:id', comprador.listarUnico);

// Atualizar usuário por ID
router.put('/users/:id', comprador.atualizar);

// Excluir usuário por ID deletar
router.delete('/users/:id', comprador.deletar);

// Excluir todos usuários
router.delete('/users', comprador.deletarTodos);

export { router };

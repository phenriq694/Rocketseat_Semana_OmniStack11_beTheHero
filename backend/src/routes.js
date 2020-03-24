const express = require('express');

const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end;
  * POST: Criar uma informação no back-end;
  * PUT: Alterar uma informação no back-end;
  * DELETE: Deletar uma informação no back-end;
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após '?' (filtro, paginação);
   * Route Params: Parâmetros utilizados para identificar recursos;
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
   */
  routes.post('/users', (request, response) => {
    const body = request.body
  
    console.log(body);
  
    return response.json({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Diego Fernandes'
    });
  });

  module.exports = routes;
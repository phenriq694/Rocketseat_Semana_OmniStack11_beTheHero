const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

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

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/incidents', IncidentController.store);

module.exports = routes;

  
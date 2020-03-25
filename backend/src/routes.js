const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


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

routes.post('/', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:incident_id', IncidentController.delete)

module.exports = routes;

  
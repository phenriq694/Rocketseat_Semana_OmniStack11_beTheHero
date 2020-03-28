const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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

/**
 * Sessions Routes
 */
routes.post('/sessions', celebrate({
   [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
   })
}),SessionController.create)

/**
 * Ongs Routes
 */
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}), OngController.create);

/**
 * Profile Routes
 */
routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
   }).unknown()
}),ProfileController.index);

/**
 * Incidents Routes
 */
routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   }),
}),IncidentController.index);

routes.post('/incidents', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
   }).unknown(),
   [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
   })
}), IncidentController.create);

routes.delete('/incidents/:incident_id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      incident_id: Joi.number().required(),
   })
}),IncidentController.delete)

module.exports = routes;

  
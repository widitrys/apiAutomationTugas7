const supertest = require ('supertest');
const baseUrlProd = require('../globalVariable/baseUrl');

// path get List Object
const getListObjects = () => supertest(baseUrlProd)
      .get('/objects')

// path get List Object by id
const getListObjectsId = (id) => supertest(baseUrlProd)
      .get('/objects/' + id)

// path post add Object
const addObject = (body) => supertest(baseUrlProd)
      .post('/objects')
      .send(body)

// path put Object
const updateObject = (id, body) => supertest(baseUrlProd)
      .put('/objects/' + id)
      .send(body)

// path patch Object (updatePartial)
const updateObjectPartial = (id, body) => supertest(baseUrlProd)
      .patch('/objects/' + id)
      .send(body)


// path Delete Object
const deleteObject = (id) => supertest(baseUrlProd)
      .delete('/objects/' + id)


module.exports = {
    getListObjects,
    getListObjectsId,
    addObject,
    updateObject,
    updateObjectPartial,
    deleteObject,
}
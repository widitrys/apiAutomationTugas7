const supertest = require ('supertest');
const baseUrlProd = require('../globalVariable/baseUrl');

// path add User
const addUser = (body) => supertest(baseUrlProd)
      .send('/users/' + body)

// path get User Profile
const getUserProfile = () => supertest(baseUrlProd)
      .set('Authorization', 'Bearer ') 
      .get('/users/me')

// path add Contact
const addContact = (body) => supertest(baseUrlProd)
      .send('/contacts' + body)

// path get Contact
const getContact = (contactId) => supertest(baseUrlProd)
      .set('Authorization', 'Bearer ')
      .get('/contacts/' + contactId)

// path update Contact
const updateObject = (contactId, body) => supertest(baseUrlProd)
      .set('Authorization', 'Bearer ')
      .put('/contacts/' + contactId)
      .send(body)

// path update Contact (updatePartial)
const updateObjectPartial = (contactId, body) => supertest(baseUrlProd)
      .set('Authorization', 'Bearer ')
      .patch('/contacts/' + contactId)
      .send(body)

// path Delete Object
const deleteContact = (contactId) => supertest(baseUrlProd)
      .set('Authorization', 'Bearer ')
      .delete('/contacts/' + contactId)


module.exports = {
    addUser,
    getUserProfile,
    addContact,
    getContact,
    updateObject,
    updateObjectPartial,
    deleteContact,
}
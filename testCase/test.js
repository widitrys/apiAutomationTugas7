const { expect } = require("chai");
const {
  addUser,
  getUserProfile,
  addContact,
  getContact,
  updateObject,
  updateObjectPartial,
  deleteContact,
} = require("../serverApi/apiPath");
const globalVariable = require("../globalVaribles/baseUrl");
const { it } = require("mocha");

//Test Suit
describe("End To End Automation Testing API", function () {
  //addUser
  it("Add User", async () => {
    const response = await addUser(testData.addUser);
      //parse json jadi objek
      const authorization = JSON.parse()
      const token = authorization.token;

    console.log(response.body);
    expect(response.status).equal(201);
    expect(response.body);
    globalVariable = response.body.token
  });
  it;
});

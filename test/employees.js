var assert = require("assert");
var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;
var should = chai.should();

const server = require("../src/app");

chai.use(chaiHttp);

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("ChaiJs expect", () => {
  it("ChaiJs expect Tutorial", () => {
    expect(10).to.be.a("number");
    expect(10).has.been.a("number");
    expect(10).which.is.a("number");
  });
});

describe("GET /api/employees", () => {
  it("should respond with all employees - callbacks", done => {
    chai
      .request(server)
      .get("/api/employees")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.type.should.equal("application/json");

        done();
      });
  });
});

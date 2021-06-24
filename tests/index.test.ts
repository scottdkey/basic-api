process.env.NODE_ENV = 'test'


import chai, { should as Should, expect } from 'chai'
import chaiHttp from "chai-http"
import { server } from "../src/index"

const should = Should()
chai.use(chaiHttp)
describe('routes:index', () => {
  after(() => {
    server.close
  })
  it('GET: should return hello world in json', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        should.not.exist(err)
        res.status.should.equal(200);
        res.type.should.equal('application/json')
        res.body.message.should.equal("hello world")
        done()
      })
  })
  const testValue = 'testingFunctionality'
  it('PUT: should return the test param entered in the message', (done) => {
    chai
      .request(server)
      .put(`/${testValue}`)
      .end((err, res) => {
        should.not.exist(err)
        res.status.should.equal(200);
        res.type.should.equal('application/json')
        expect(res.body.message).to.equal(testValue)
        done()
      })
  })
  it('GET: should validate new route', (done) => {
    chai
      .request(server)
      .get('/test')
      .end((err, res) => {
        should.not.exist(err)
        res.status.should.equal(200);
        res.type.should.equal('application/json')
        res.body.message.should.equal("this test works")
        done()
      })
  })
  it('point update test for kube CICD test', (done) => {
    chai
      .request(server)
      .get('/v5')
      .end((err, res) => {
        should.not.exist(err)
        res.status.should.equal(200);
        res.type.should.equal('application/json')
        res.body.message.should.equal("kube update v5")
        done()
      })
  })
})
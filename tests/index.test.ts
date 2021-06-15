process.env.NODE_ENV = 'test'


import chai, { should as Should } from 'chai'
import chaiHttp from "chai-http"
import {app} from "../src/index"

const should = Should()
chai.use(chaiHttp)
const server = app.listen(8000)
describe('routes:index', () => {
  it('should return hello world in json', (done) => {
    chai.request(server).get('/').end((err, res) => {
      should.not.exist(err)
      res.status.should.equal(200);
      res.type.should.equal('application/json')
      res.body.message.should.equal("hello world")
      done()
    })
  })
})
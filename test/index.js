const Mocha = require('mocha');
const assert = require('assert');
var request = require('supertest'); 
var  base_url = 'http://localhost:22001';
var Checkmark = require("checkmark");
//start up the server
let server = require('../server');


describe('testing get method with id', () => {
      it('it returns 200(ok) status on success', (done) => {
        var check = new Checkmark(1, done);
        request(base_url)
            .get('/fake/foo')
            .send('123')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          // done();
            check();
        });
        
        request(base_url)
            .get('/fake/foo')
            .send('123')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          // done();
          check();
            
          });

      });
  });


describe('testing basic get method', () => {
      it('it returns 200(ok) status on success', (done) => {
        request(base_url)
            .get('/')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          done();
            });
      });
  });



describe('testing get method with id', () => {
      it('it returns 200(ok) status on success', (done) => {
        request(base_url)
            .get('/')
            .send('123')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          done();
            
          });
      });
  });




  describe('return hello wrold for get /hi route', () => {
      it('it returns hello world static test', (done) => {
        request(base_url)
            .get('/hi')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.text,'Hello World');
          done();
            });
      });
  });

   

  describe('testing basic post method', () => {
      it('it returns 200(ok) status on success', (done) => {
        request(base_url)
            .post('/')
            .send('')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          done();
            });
      });
  });

   
  describe('testing post method with id', () => {
      it('it returns 200(ok) status on success', (done) => {
        request(base_url)
            .post('/')
            .send('123')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          done();
            });
      });
  });

    describe('testing basic post method', () => {
      it('it returns 200(ok) status on success', (done) => {
        request(base_url)
            .get('/mock')
            .send('')
            .end(function(err, res) {
          if (err) {
            throw err;
          }
          assert.equal(res.status,200);
          done();
            });
      });
  });
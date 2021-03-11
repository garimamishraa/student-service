// // import supertest from 'supertest';

// // const request = supertest('http://localhost:3000/api/');

// const chai = require('chai');
// const expect = require('chai').expect;

// chai.use(require('chai-http'));

// const app = require('../index.js');

// // describe('Students', () => {
// //     it('POST /save', () => {
// //         request.get('save').end((err, res) => {
// //             console.log(err);
// //             console.log(res.body);
// //         });
// //     });
// // });

// it('Insert an element', function() {
//     return chai.request(app)
//     .get('/save')
//     .then(function(res) {
//     //   expect(res).to.have.status(200);
//     //   expect(res).to.be.json;
//     //   expect(res.body).to.be.an('object');
//     //   expect(res.body.results).to.be.an('array');
//       expect.res.text.should("Inserted!");
//     });
// })
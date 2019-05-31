/**
 * test/test.js
 * Basic tests for Auth system API
 */
const chai = require('chai');
const expect = chai.expect;

// Start app (REST API)
const app = require('../api/app');

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})

// Import chai-http to send requests to the app
const http = require('chai-http');
chai.use(http);

describe('Search Book', () => {

  it('Valid Search by ISBN', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({isbn:'1234-1234'}) // api/book?isbn='1234-1234'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Title', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({title:'Sample book title'}) // api/book?title='Sample book title'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Author', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({author:'Dan Brown'}) // api/book?author='Sample book title'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Category', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({category:'Fiction'}) // api/book?category='fiction'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Publication Date', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({publication_date:'New Company'}) // api/book?publication_date='01/01/2019'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Publisher', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({publisher:'New Company'}) // api/book?publisher='New Company'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Genre', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({genre:'Comic'}) // api/book?genre='comic'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Valid Search by Subject', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
	  .query({subject:'Sample'}) // api/book?subject='Sample'
      .then((res) => {
        //console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.key('books');
		expect(res.body.books.length).to.be.equal(1);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Invalid Search - No Parameters - 400 Error', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', '324jhsdj21jhd')
      .then((res) => {
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Invalid Search - No API Key - 403 Error', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .query({subject:'Sample'}) // api/book?subject='Sample'
      .then((res) => {
        console.log(res.body);
        expect(res).to.have.status(403);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
  it('Invalid Search - Invalid API Key - 401 Error', (done) => {
    // Send request to the app
    chai.request(app).get('/api/book')
	  .set('api_key', 'invalid')
	  .query({subject:'Sample'}) // api/book?subject='Sample'
      .then((res) => {
        console.log(res.body);
        expect(res).to.have.status(401);
        done();
    }).catch(err => {
      console.log(err.message);
    })
  });
  
})
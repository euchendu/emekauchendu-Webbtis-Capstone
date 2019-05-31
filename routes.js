/**
 * /api/routes.js
 * Exports an express router.
 */ 

const express = require('express');

// Create the express router that will have all endpoints
const router = express.Router();

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

router.get('/api/book', (req, res, next) => {
  let hasErrors = false;
  let books = [
    {
      isbn:'1234-1234-2134',
      title:'Sample book title',
      author:'Dan Brown',
      category:'Sample book title',
      publisher:'New Company',
      publication_date:'01/01/2019',
      genre:'Comic',
      subject:'Sample'
    }
  ];

  if(!req.headers.api_key){
    res.status(403).json({
      error: "API key is missing."
    })
  }else if(req.headers.api_key == 'invalid'){
	  res.status(401).json({
        error: "Invalid API key."
      })
  }else{
    if(isEmptyObject(req.query)){
      res.status(400).json({
        error: "Please provide at least one search parameter."
      })
	}else{
      if(req.query.isbn){
        res.status(200).json({
          books: books
        });
      }else if(req.query.title){
        res.status(200).json({
          books: books
        });
      }else if(req.query.author){
      res.status(200).json({
        books: books
      });
      }else if(req.query.category){
      res.status(200).json({
        books: books
      });
      }else if(req.query.publisher){
      res.status(200).json({
        books: books
      });
     }else if(req.query.publication_date){
      res.status(200).json({
        books: books
      });
      }else if(req.query.genre){
      res.status(200).json({
        books: books
      });
      }else if(req.query.subject){
        res.status(200).json({
          books: books
        });
      }
	}
  }
});

module.exports = router;
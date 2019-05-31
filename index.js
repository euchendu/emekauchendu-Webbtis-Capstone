const app = require('./api/app');

let server = app.listen(8088, function() {  
    console.log('Server is listening on port 8088')
});
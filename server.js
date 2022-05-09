const express = require('express');

const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;



// ...


app.post('/test', function(req, res) {
    
    
    const string_to_cut = req.body.string_to_cut;

    let storeMessage = "String was traversed successfully.";

    let return_string = [];
    
    let testString = string_to_cut.split("");

    for (let i = 2; i < testString.length; i+=3) {
        return_string.push(testString[i]);
    }
    
  
    res.send({
      'return_string' : return_string.join(''),
    });
    console.log(storeMessage);
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);
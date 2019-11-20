let expect  = require('chai').expect;  
let request = require('request');    

describe('search api test', function() {     
    describe ('Tune', function() {         
        it('search constant', function(done){             
            request('http://localhost:8000/itunes/search/jack johnson/all', function(error, response, body) {                                               
                expect(response.statusCode).to.equal(200);  // valid response code                
                expect(JSON.parse(response.body).resultCount).equals(50); // match on constant      
                done();             
            });         
        });                   
    });   
})

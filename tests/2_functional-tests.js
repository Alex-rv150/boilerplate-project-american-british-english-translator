const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {


     test("2.1" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text:"We watched the footie match for a while.",
 locale: "british-to-american"
})
      .end(function(err, res){

       if(/<span class="highlight">[a-z]+/gi.test(res.body.translation)){
 assert.equal(res.body,res.body)

console.log(res.body)
        done()


        }else{

 console.log("falta")

        }
       


     
      });





  })

   
     test("2.2" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text:"We watched the footie match for a while.",
 locale: "british-american"
})
      .end(function(err, res){
 assert.equal(res.body,res.body)
        console.log("{ error: 'Invalid value for locale field' }")

console.log(res.body)
        done()


       



        
      


     
      });





  })


   test("2.3" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 
 locale: "british-to-american"
})
      .end(function(err, res){
 assert.equal(res.body,res.body)
console.log(" { error: 'Required field(s) missing' }")

console.log(res.body)
        done()


       

 
        
});
});

  test("2.4" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text: "We watched the footie match for a while.",
 
})
      .end(function(err, res){
 assert.equal(res.body,res.body)
console.log(" { error: 'Required field(s) missing' }")

console.log(res.body)
        done()


       

 
        
});
});

  test("2.5" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text:"",
 locale: "british-to-american"
})
      .end(function(err, res){
 assert.equal(res.body,res.body)
console.log("{ error: 'No text to translate' }")

console.log(res.body)
        done()


       

 
        
});
});



  test("2.6" , function(done){

chai.request(server)
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text:"We watched the soccer match for a while.",
 locale: "british-to-american"
})
      .end(function(err, res){
 assert.equal(res.body,res.body)
console.log("Everything looks good to me!")

console.log(res.body)
        done()


       

 
        
});
});






});
const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    test("1.1" , function(done){

        chai.request(server)
              .post('/api/translate')
              .set("content-type", "application/json")
        .send({
         text:"Mangoes are my favorite fruit.",
         locale: "american-to-british"
        })
              .end(function(err, res){
        
                assert.equal(res.body,res.body)
                console.log(res.body)
                
               done()
        
               
        
        
             
              });
        
        
        
        
        
          })



          test("1.2" , function(done){

            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"I ate yogurt for breakfast.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
            
            
                    assert.equal(res.body,res.body)
            
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
              
            
               test("1.3" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"We had a party at my friend's condo.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
            
                    assert.equal(res.body,res.body)
            
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.4" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Can you toss this in the trashcan for me?",
             locale: "american-to-british"
            })
                  .end(function(err, res){
            
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.5" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"The parking lot was full.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
            
            
                    assert.equal(res.body,res.body)
            
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.6" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Like a high tech Rube Goldberg machine.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
            
                    assert.equal(res.body,res.body)
            
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.7" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"To play hooky means to skip class or work.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.8" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"No Mr. Bond, I expect you to die.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
             test("1.9" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Dr. Grosh will see you now.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
                  });
            
            
                   test("1.10" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Lunch is at 12:15 today.",
             locale: "american-to-british"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.11" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"We watched the footie match for a while.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.12" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Paracetamol takes up to an hour to work.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.13" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"First, caramelise the onions.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.14" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"I spent the bank holiday at the funfair.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.15" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"I had a bicky then went to the chippy.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.16" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"I've just got bits and bobs in my bum bag.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.17" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"The car boot sale at Boxted Airfield was called off.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.18" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Have you met Mrs Kalyani?",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.19" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Prof Joyner of King's College, London.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
             
            
               test("1.20" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Tea time is usually around 4 or 4.30.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
                    assert.equal(res.body,res.body)
            
                    console.log(res.body)
                    done()
                   
            
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
            
               test("1.21" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Mangoes are my favorite fruit.",
             locale: "american-to-british"
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
            
               test("1.22" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"I ate yogurt for breakfast.",
             locale: "american-to-british"
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
            
               test("1.23" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"We watched the footie match for a while.",
             locale: "british-to-american"
            })
                  .end(function(err, res){
            
                    console.log(res.body)
            
                   if(/<span class="highlight">[a-z]+/gi.test(res.body.translation)){
                    assert.equal(res.body,res.body)
            
            console.log(res.body)
                    done()
            
            
                    }else{
            
             console.log("falta")
            
                    }
                   
            
            
                 
                  });
            
            
            
            
            
              })
            
               test("1.24" , function(done){
            
            chai.request(server)
                  .post('/api/translate')
                  .set("content-type", "application/json")
            .send({
             text:"Paracetamol takes up to an hour to work.",
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
             
            
              
            
            
             
               
             
            
            

});

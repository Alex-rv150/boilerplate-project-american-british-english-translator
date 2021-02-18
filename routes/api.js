'use strict';


const chai = require('chai');


const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {


     /*  chai.request("https://american-british-translator.freecodecamp.rocks")
      .post('/api/translate')
      .set("content-type", "application/json")
.send({
 text:"Mangoes are my favorite fruit.",
 locale: "american-to-british"
})
      .end(function(err, res){

        console.log(res.body)
       

       


     
      });*/

 

if(req.body.text && req.body.text[req.body.text.length - 1] == "."){
         console.log("ese")

     req.body.text=  req.body.text.slice(0,-1);
}
   

      console.log(req.body)

      if(req.body.text === undefined || req.body.locale === undefined){

      console.log("son undefined")
      res.json({ error: 'Required field(s) missing' })
   return;




      }else{


        let retorno = req.body.text

         let  vlocale =  req.body.locale == "american-to-british" ? true : req.body.locale == "british-to-american" ? true : false ;

        if(req.body.text == ""){

           res.json({ error: 'No text to translate' })
        return;


        }


        if(vlocale == false){

         
         res.json({ error: 'Invalid value for locale field' })

         console.log("error en locale")

         return;
       

        }


        let string = req.body.text.split(" ")

        

        if(req.body.locale == "american-to-british" ){




console.log(string)


let uno = Object.keys(translator.principal())

let dos =  Object.values(translator.principal())

let uno1 = Object.keys(translator.american())


let dos1 = Object.values(translator.american())


let uno2 = Object.keys(translator.honor())


let dos2 = Object.values(translator.honor())

string.forEach(function(val){

  uno.forEach(function(val1,index){

   if(val == val1){

   let ree = '<span class="highlight">'+dos[index]+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)

   

  

   }

  })

  uno1.forEach(function(val1,index){

   if(val == val1){

   let ree = '<span class="highlight">'+dos1[index]+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)
  

   }

  })

  uno2.forEach(function(val1,index){

   if(val.toLowerCase() == val1){

     function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

   let ree = '<span class="highlight">'+capitalize(dos2[index])+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)
  

   }

  })




  

  

})


if(/[0-9]+:[0-9]+/g.test(retorno) == true){


 let hh = retorno.match(/[0-9]+:[0-9]+/g)[0]

 let hh1 = hh.replace(":" , ".")


 let ree = '<span class="highlight">'+ hh1 +'</span>';


 retorno = retorno.replace( hh , ree)


}


 if(retorno === req.body.text){


   console.log(retorno," mmm" , req.body.text)

if(req.body.text[req.body.text.length-1] !== "!"){
  res.json({ text: req.body.text + "."   ,  translation: "Everything looks good to me!" })  
  }





return;


}else{


  if(req.body.text[req.body.text.length-1] !== "!"){
res.json({ text: req.body.text + "."  ,  translation: retorno + "." 
 })

  }else{
 if(req.body.text[req.body.text.length-1] == "!"){


res.json({ text: req.body.text   ,  translation: retorno 
 })


 }
  }






return;



}

          





        }



if(req.body.locale == "british-to-american" ){
console.log(string)





let uno = Object.values(translator.american())



let dos =   Object.keys(translator.american())



let uno1 = Object.keys(translator.british())


let dos1 = Object.values(translator.british())


let uno2 = Object.values(translator.honor())


let dos2 = Object.keys(translator.honor())



string.forEach(function(val){

  uno.forEach(function(val1,index){

   if(val == val1){

   let ree = '<span class="highlight">'+dos[index]+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)

     

  

   }

  })


   uno1.forEach(function(val1,index){

   if(val.toLowerCase() == val1){



   let ree = '<span class="highlight">'+dos1[index]+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)
  

   }

  })



  uno2.forEach(function(val1,index){

   if(val.toLowerCase() == val1){

     function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

   let ree = '<span class="highlight">'+dos2[index]+'</span>';

      retorno = retorno.replace( val , ree)

      console.log(retorno)
  

   }

  })

  


 

})

if(/[0-9]+.[0-9]+/g.test(retorno) == true){


 let hh = retorno.match(/[0-9]+.[0-9]+/g)[0]

 let hh1 = hh.replace("." , ":")


 let ree = '<span class="highlight">'+ hh1 +'</span>';


 retorno = retorno.replace( hh , ree)


}



if(retorno === req.body.text){

  console.log("no necesita")


  if(req.body.text[req.body.text.length-1] !== "!"){
  res.json({ text: req.body.text + "."   ,  translation: "Everything looks good to me!" })  
  }else{
    if(req.body.text[req.body.text.length-1] == "!"){

 res.json({ text: req.body.text    ,  translation: "Everything looks good to me!" })  

    }

  
  


  }








return;


}else{


   if(req.body.text[req.body.text.length-1] !== "!"){
res.json({ text: req.body.text + "."  ,  translation: retorno + "." 
 })

  }else{
 if(req.body.text[req.body.text.length-1] == "!"){


res.json({ text: req.body.text   ,  translation: retorno 
 })


 }




  }









return;



}


        }

        

        




      
    
 




      }
      
    });
};

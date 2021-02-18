const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  principal(){

    return americanToBritishSpelling

  }


  american(){

    return americanOnly

  }


 british(){

    return britishOnly

  }

  honor(){
    return americanToBritishTitles
  }

}

module.exports = Translator;
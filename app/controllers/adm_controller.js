var Adm = require("../models/adm");
const AdmController = {
  /*
    index: function(req, res, next) {
         res.send(Adm.todos());
       }
 */
   // outra forma de fazer a função javascript
 
        index:(req, res, next) => {
          res.send(Adm.todos());
       }
     
 }
 module.exports = AdmController; 
var Adm = require("../models/adm");

const AdmController = {

        index:(req, res, next) => {

          Adm.find().then(dado  =>res.send(dado));
/*          
          const adm= new Adm({nome:'Suporte', senha:'654321', email:'suporte@everton.com.br'});
          adm.save(error =>{
            if(error){
              res.send(error);
              return
            }
            Adm.find().then(dado=>{
              res.send(dado);
            });
          });
 */         
        }        
 }
 module.exports = AdmController; 

   /*
    index: function(req, res, next) {
         res.send(Adm.todos());
       }
 */

// outra forma de fazer a função javascript
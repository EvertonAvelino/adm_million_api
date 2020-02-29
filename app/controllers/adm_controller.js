const AdmController = {
    index: function(req, res, next) {
         res.send([{id:1,nome:"Everton" }]);
       }
 
   /*// outra forma de fazer a função javascript
 
        index:(req, res, next) => {
         res.send([{id:1,nome:"Everton" }])
       }
   
   */   
 }
 module.exports = AdmController; 
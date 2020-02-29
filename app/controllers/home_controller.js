const HomeController = {
   index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      }

  /*// outra forma de fazer a função javascript

       index:(req, res, next) => {
        res.render('index', { title: 'Express' });
      }
  
  */   
}
module.exports = HomeController; 
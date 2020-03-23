const Adm = require('../../app/models/adm');

describe('Modelo Adm', () => {
  it('Deve retornar o modelo de Adm', () => {
       
    Adm.find().then(dado => {
      expect(dado !== undefined).toBe(true);
    });
  });
 
    it('Deve incluir um admnistrador', () => {
      let nome = "teste" + new Date().getTime();
      const adm= new Adm({nome: nome, senha:'654321', email: nome + '@everton.com.br'});
      adm.save(error =>{
        expect(error == undefined || error == null).toBe(true);
      });
    });
});

//nova forma de concatenar do javascript
// let nome = 'teste $new Date().getTime();}';
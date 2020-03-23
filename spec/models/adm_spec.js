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

    it(' não deve incluir um admnistrador repetido', () => {
      let nome = "teste" + new Date().getTime();
      const adm= new Adm({nome: nome, senha:'654321', email: nome + '@everton.com.br'});
      adm.save(error =>{
        const adm2= new Adm({nome: nome, senha:'654321', email: nome + '@everton.com.br'});
        adm2.save(error =>{
          expect(error == undefined || error == null).toBe(false);
        });
      });
    });


    it('nao deve incluir um admnistrador sem nome', () => {
      let nome = "teste" + new Date().getTime();
      const adm= new Adm({nome: null, senha:'654321', email: nome + '@everton.com.br'});
      adm.save(error =>{
        expect(error == undefined || error == null).toBe(false);
      });
    }); 
    
    
    it(' não deve alterar nome', () => {
      let nome = "teste" + new Date().getTime();
      const adm= new Adm({nome: nome, senha:'654321', email: nome + '@everton.com.br'});
      adm.save(error =>{
        const adm= new Adm({nome: nome, senha:'654321', email: nome + '@everton.com.br'});
        let novoNome = "Everton vitor" + new Date().getTime();
        adm.nome = novoNome;
        adm.save(error =>{
          expect(error == undefined || error == null).toBe(false);
          adm.find({nome:novoNome}).then(dado =>{
            expect(error == undefined || error == null).toBe(false);
          });
        });
      });
    });

});

//nova forma de concatenar do javascript
// let nome = 'teste $new Date().getTime();}';
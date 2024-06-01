var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  fetch("https://literate-space-palm-tree-v9499vw6pqw2wjwr-4000.app.github.dev/pets")
    .then((res) => {
      return res.json()
    })
    .then((pets) => {
      console.log(pets)
      listData = pets.map(pet=>{
        return {
          id: pet.id,
          nome: pet.nome,
          raca: pet.raca,
          sexo: pet.sexo

        }
      })
      res.render('layout', { body: 'pet', title: 'Estou em pets', listData, cols: ["Id", "Nome", "Raça", "Sexo"]});
    })


});

module.exports = router;
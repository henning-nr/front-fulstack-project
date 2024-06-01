var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  fetch("https://literate-space-palm-tree-v9499vw6pqw2wjwr-4000.app.github.dev/tutors")
    .then((res) => {
      return res.json()
    })
    .then((tutors) => {
      console.log(tutors)
      listData = tutors.map(tutor=>{
        return {
          id: tutor.id,
          nome: tutor.nome,
          raca: tutor.raca,
          sexo: tutor.sexo

        }
      })
      res.render('layout', { body: 'pet', title: 'Estou em tutors', listData, cols: ["Id", "Nome", "Email", "Sexo"]});
    })


});

module.exports = router;
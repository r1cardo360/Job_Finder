const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//rota de teste
router.get('/teste', (req, res) => {
    res.send('Testando');
})

//add jobs via POST

router.post('/add', (req, res) => {
    let {titulo, description, salary, company, email, new_job} = req.body;

    Job.create({
        titulo,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => {res.redirect('/')})
    .catch(err => {console.log(err)});

});

module.exports = router;

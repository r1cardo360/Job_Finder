const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { where } = require('sequelize');

//rota de teste
router.get('/teste', (req, res) => {
    res.send('Testando');
});

//detalhes das vagas
router.get('/view/:id', (req, res) => Job.findOne({
        where:{id: req.params.id}
    }).then(job => {
        res.render('view', {
            job
        });
    }).catch(err => console.log(err)));

//form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
});

//add jobs via POST

router.post('/add', (req, res) => {
    let {title, description, salary, company, email, new_job} = req.body;

    Job.create({
        title,
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

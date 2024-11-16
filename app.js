const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const job = require('./models/Job');
const sequelize = require('sequelize');
const OP = sequelize.Op;

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O servidor está rodando: http://localhost:${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended:false}));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//db connection
db
    .authenticate()
    .then(() => {
        console.log('Conectou com secesso !');
    })
    .catch(err => {
        console.log('Ocorreu um erro ao se conectar ao banco de dados', err);
    });

//routes
app.get('/', (req, res) => {

    let search = req.query.joob;
    let query = '%' + search + '%';

    if(!search){
        job.findAll({order:[
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs
            });
        })
        .catch(err => console.log(err));
    }else{
        job.findAll({
            where: {title:{[OP.like]:query}},
            order:[
                ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            });
        })
        .catch(err => console.log(err));
    }
});

//Jobs Routes
app.use('/jobs', require('./routes/jobs'));

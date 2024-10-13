const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O servidor está rodando: http://localhost:${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended:false}));

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
    res.send('Servidor Rodando 2');
})

//Jobs Routes
app.use('/jobs', require('./routes/jobs'));

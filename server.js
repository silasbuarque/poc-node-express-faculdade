const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const port = 3000;
const service = require('./service');
const app = express();
const queries = require('./queries');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', async (req, res) => {

    const newUser = {
        username: req.body.username,
        password_user: req.body.password_user,
        name_user: req.body.name_user,
        document: req.body.document,
        dt_nasc: req.body.dt_nasc,
        email: req.body.email
    };

    service.addUser(newUser)
        .then(() => res.status(200).send('Usuário adicionado com sucesso!'))
        .catch(err => res.status(err.statusCode).send(err.message));
});

app.get('/users/all', (req, res) => {
    service.getAll().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error.message);
    });    
});

app.get('/users/:id', (req, res) => {
    service.getById(req.params.id).then((result) => {
        if (Object.keys(result).length === 0) {
            res.status(404).send("Usuário não existe");
        } else {
            res.send(result);
        }
    }).catch((error) => {
        res.status(500).send(error.message);
    });
});

app.put('/users/:id', (req, res) => {

    const newUser = {
        username: req.body.username,
        password_user: req.body.password_user,
        name_user: req.body.name_user,
        document: req.body.document,
        dt_nasc: req.body.dt_nasc,
        email: req.body.email
    };

    service.updateUser(req.params.id, newUser)
    .then(() => res.status(200).send('Usuário atualizado com sucesso!'))
    .catch(err => res.status(500).send(err.message));

});

app.delete('/users/:id', (req, res) => {
    service.deleteUserById(req.params.id).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error.message);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

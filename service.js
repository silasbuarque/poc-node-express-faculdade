const db = require('./db');
const validate = require('./validate');
const queries = require('./queries');

class Service {

    addUser(newUser) {
        return new Promise(async (resolve, reject) => {
            try {
                await validate.validateUser(newUser);
                db.query(queries.createUser, [newUser.username, newUser.password_user, newUser.name_user, newUser.document, newUser.dt_nasc, newUser.email], (err, result) => {
                    if (err) reject(err);
                    resolve('Usuário adicionado com sucesso!');
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            db.query(queries.getUsers, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            db.query(queries.getUserById, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    updateUser(idReq, newUser) {        
        return new Promise(async (resolve, reject) => {
            try {
                await validate.validateUser(newUser);
                const { id } = idReq;
                db.query(queries.updateUserById, [newUser.username, newUser.password_user, newUser.name_user, newUser.document, newUser.dt_nasc, newUser.email, id], (err, result) => {
                    if (err) reject(err);
                    resolve('O usuario do id ' + id + ' foi atualizado com sucesso!');
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    deleteUserById(id) {
        return new Promise((resolve, reject) => {
            db.query(queries.deleteUserById, [id], (err, result) => {
                if (err) reject(err);
                resolve('Usuário deletado com sucesso!');
            });
        });
    }

}

module.exports = new Service();
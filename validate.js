const db = require('./db');
const queries = require('./queries');
const moment = require('moment');
const CustomError = require('./CustomError');


async function validateUser(newUser) {
    
    if (newUser.username === undefined || newUser.username === '') {
        throw new CustomError("O campo username é obrigatório", 400);
    }

    if (newUser.password_user === undefined || newUser.password_user === '') {
        throw new CustomError("O campo password_user é obrigatório", 400);
    }

    if (newUser.name_user === undefined || newUser.name_user === '') {
        throw new CustomError("O campo name_user é obrigatório", 400);
    }

    if (newUser.document === undefined || newUser.document === '') {
        throw new CustomError("O campo document é obrigatório", 400);
    }

    if (newUser.dt_nasc === undefined || newUser.dt_nasc === '') {
        throw new CustomError("O campo dt_nasc é obrigatório", 400);
    }
    
    if (newUser.email === undefined || newUser.email === '') {
        throw new CustomError("O campo email é obrigatório", 400);
    }
    

    return true;
}

module.exports = { validateUser };
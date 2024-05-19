const queries = {
    createUser: `INSERT INTO usuario (USERNAME, PASSWORD_USER, NAME_USER, DOCUMENT, DT_NASC, EMAIL) VALUES (?, ?, ?, ?, ?, ?)`,
    getUsers: `SELECT * FROM usuario`,
    getUserById: `SELECT * FROM usuario WHERE id = ?`,
    updateUserById: `UPDATE usuario SET USERNAME = ?, PASSWORD_USER = ?, NAME_USER = ?, DOCUMENT = ?, DT_NASC = ?, EMAIL = ? WHERE id = ?`,
    deleteUserById: `DELETE FROM usuario WHERE id = ?`,
    getUserByEmail: `SELECT EMAIL FROM USUARIO WHERE EMAIL = ?`,
    getUserByDocument: `SELECT * FROM usuario WHERE DOCUMENT = ?`
};

module.exports = queries;
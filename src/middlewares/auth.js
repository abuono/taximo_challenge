// import sha256 from "sha256";
const sha256 = require('sha256')
// const SHA256 = require('crypto-js/sha256')

module.exports = {
    authToken: (req, res, next) =>  {
        //console.warn(req);
        let user = req.headers['username']
        let checksum = sha256(user)
    
        console.log('Ingreso al Middleware para validar acceso');
        // console.warn(user);
    
        if (user == 'taximo_api_user' && checksum == sha256('taximo_api_user')) {
            next();
        } else {
            return res.status(401).send({
                status: false,
                error: 'Please verify the user and password, they must be correct'
            })
        }
    }
}

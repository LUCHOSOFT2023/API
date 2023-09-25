const jwt = require('jsonwebtoken')

const generarJWT = ( uid = '') => {//uid - identificar unico del usuario
    return new Promise((resolve, reject) => {
        
        const payload = { uid }
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn : '5m',
        }, (err, token) => {
            if( err ){
                console.log(err)
                reject('No se pudo generar el token')
            }
            else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}
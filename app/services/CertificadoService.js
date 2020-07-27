import { getUser } from './UserService'
import constants from '../const'

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}



function isCertifiedValid() {

    let promise = new Promise((resolve, reject) => {
        if (recuperarToken() !== null) {
    
            let token = recuperarToken()
    
            let usuarioLogado = b64DecodeUnicode(token.split('.')[1])
    
            let _email = JSON.parse(usuarioLogado).email

            getUser(_email, token).then((result) => {
                resolve(result)

            }).catch((error) => {
                reject(error)
            })
    
        }else{
            reject('não tem token')
        }
    })

    return promise
}


function recuperarToken() {
    return localStorage.getItem(constants.KEY_CONDO_STORAGE)
}


export { recuperarToken, isCertifiedValid }
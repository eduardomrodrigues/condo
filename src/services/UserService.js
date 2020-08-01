
import axios from 'axios'
import constants from '../const'


function getUser(_email, token) {

   return axios.get(constants.API_URL + '/user/' + _email, {
        headers: {
            Authorization: token
        }
    })

}

export { getUser }
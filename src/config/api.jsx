import axios from 'axios'

const getURL = () => {
    if (location.hostname === 'localhost') {
        return 'http://load-webservices.1a8b40c3be00487f8fdd.centralus.aksapp.io/api/v1/'
    } else {
        return 'http://load-webservices.1a8b40c3be00487f8fdd.centralus.aksapp.io/api/v1/'
    }
}

export const apiLogin = axios.create({
    baseURL:
        'http://load-authentication.1a8b40c3be00487f8fdd.centralus.aksapp.io/api/v1/',
    timeout: 9000,
    headers: {
        Authorization: 'Basic bG9hZDp1c2Vy',
        Accept: 'application/json',
        'Api-Key': '123456789ABCD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

const instance = axios.create({
    crossdomain: true,
    baseURL: getURL(),
    timeout: 9000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Api-Token': '0456B92CAE264ADA16D9DA3D2C5D64FA'
    }
})

instance.interceptors.request.use(
    config => {
        if (localStorage.access_token) {
            config.headers.Authorization = 'Bearer ' + localStorage.access_token
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)

export default instance

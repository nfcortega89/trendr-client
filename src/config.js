const API_URL = process.env.NODE_ENV === 'production'
                ? 'https://google.com'
                : 'https://frozen-waters-55431.herokuapp.com/'
console.log('NODE_ENV', process.env.NODE_ENV)
module.exports = { API_URL }

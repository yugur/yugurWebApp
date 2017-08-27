let request = require('request');
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')

export function getAllWordEntries() {
  let url = BASE_API_URL+FETCH_ENDPOINT
  let type = 'GET'

  let authToken = getAuthToken()
  let params = {
    token: authToken
  }

  let wordEntries = makeRequest(type, url, params)
  return wordEntries;
}

//Calls login endpoint to retrieve auth token, stores token locally
export function login(uname, password) {
  //TODO
}

//check status of local auth token - valid, uninitialised, expired etc.
export function authStatus(auth) {
  //TODO
}

//retrieves the current auth token from local storage
getAuthToken() {

}

 //Makes API requests
makeRequest(type, url, params) {
  switch(type) {
    case 'GET':
      options = {
        uri: url,
        method: type,
        body: params
      }
      request.get(options, function(err, resp, body) {
        console.log('error:', err)
        return body;
      })
    case 'POST':
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
  }
}
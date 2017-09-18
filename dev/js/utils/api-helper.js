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

export function searchDictionaryByWord(searchTerm) {
  console.log('Search: ',searchTerm)
  let url = BASE_API_URL+FETCH_ENDPOINT+'?q='+searchTerm
  let type = 'GET'

  let authToken = getAuthToken()
  let params = {
    token: authToken
  }
  let headers = {}

  let wordEntries = makeRequest(type, url, params, headers)
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
function getAuthToken() {

}

 //Makes API requests
function makeRequest(type, url, params, headers) {
  switch(type) {
    case 'GET':
      options = {
        uri: url,
        method: type,
        body: params,
        headers: headers
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
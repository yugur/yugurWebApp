let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT, DELETE_ENDPOINT} = require('../constants')

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
  let url = BASE_API_URL+SEARCH_ENDPOINT+'?q='+searchTerm
  let type = 'GET'

  let wordEntries = makeRequest(type, url)
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

export function deleteEntry(entry) {
  console.log('Delete: ', entry)
  let url = BASE_API_URL+DELETE_ENDPOINT+'?q='+entry
  let type = 'DELETE'
  let result = makeRequest(type, url)
}

//retrieves the current auth token from local storage
function getAuthToken() {

}

 //Makes API requests
function makeRequest(type, url) {
  let xhttp = new XMLHttpRequest();
  switch(type) {
    case 'GET':
      xhttp.onreadystatechange = function() {
        console.log('ready state changed')
        console.log(xhttp)
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      }
      xhttp.open(type, url, true)
      //xhttp.setRequestHeader('q', searchTerm)
      console.log(xhttp)
      xhttp.send();
    case 'POST':
      break;
    case 'PUT':
      break;
    case 'DELETE':
      xhttp.onreadystatechange = function() {
        console.log('ready state changed')
        console.log(xhttp)
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      }
      xhttp.open(type, url, true)
      //xhttp.setRequestHeader('q', searchTerm)
      console.log(xhttp)
      xhttp.send();
      break;
  }
}
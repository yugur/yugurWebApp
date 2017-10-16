import $ from 'jquery'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT, ENTRY_ENDPOINT} = require('../constants')

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

export function searchDictionaryByWord(searchTerm, callback) {
  console.log('Search: ',searchTerm)

  let url
  if (searchTerm == '') {
    url = BASE_API_URL+FETCH_ENDPOINT
  } else {
    url = BASE_API_URL+SEARCH_ENDPOINT+'?q='+searchTerm
  }
  let type = 'GET'

  let wordEntries = makeRequest(type, url, callback)
  return wordEntries;
}

export function searchDictionaryById(entry) {
  console.log(entry)
  let url = BASE_API_URL+ENTRY_ENDPOINT+'?='+entry
  let type = 'GET'

  let entryResult = makeRequest(type, url)
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
  let url = BASE_API_URL+ENTRY_ENDPOINT+'?q='+entry
  let type = 'DELETE'
  let result = makeRequest(type, url)
}

export function createEntry(data) {
  console.log(data)



  let url = BASE_API_URL+ENTRY_ENDPOINT//+buildCreateQuery(data)
  let type = 'POST'

  let body = buildCreateBody(data)
  console.log(url, body)
  //let result = makeRequest(type, url, null, JSON.stringify(body))

  $.post(url, JSON.stringify(body))
}

//retrieves the current auth token from local storage
function getAuthToken() {

}

function buildCreateBody(data) {
  //let queryString = '?'

  let body = {
    'headword': data.headword,
    'definition': data.definition,
    'hw_lang': data.wordLanguage,
    'def_lang': data.definitionLanguage,
    'wordtype': data.wordType
  }
  //let body = {"headword":"deleteMe","wordtype":"noun","definition":"to be deleted","hw_lang":"ko-KR","def_lang":"ko-KR"}
  //data.headword ? queryString = queryString + 'headword=' + data.headword : ''
  //data.definition ? queryString = queryString + '&definition=' + data.definition : ''

  return body
}

 //Makes API requests
function makeRequest(type, url, callback, body) {
  console.log(type, url)
  let xhttp = new XMLHttpRequest();
  switch(type) {
    case 'GET':
      xhttp.onreadystatechange = function() {
        console.log('ready state changed')
        console.log(xhttp)
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
          callback(xhttp.responseText)
          return (JSON.parse(xhttp.responseText))
        }
      }
      xhttp.open(type, url, true)
      //xhttp.setRequestHeader('q', searchTerm)
      console.log(xhttp)
      xhttp.send();
      break
    case 'POST':
      xhttp.onreadystatechange = function() {
        console.log('ready state changed')
        console.log(xhttp)
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText)
        }
      }
      xhttp.open(type, url)
      //xhttp.setRequestHeader('q', searchTerm)
      //console.log(xhttp)
      //console.log('body: ', body)
      xhttp.setRequestHeader('Content-type', 'application/json')
      xhttp.send(JSON.stringify(body));
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
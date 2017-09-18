export default function(state=null, action) {
  switch(action.type) {
    case "DICTIONARY_SEARCH":
      console.log("Searched word")
      console.log(action.payload)
      return Object.assign({}, state, {
        searchResponse: action.payload
      })
      break

  }

  return state;
}
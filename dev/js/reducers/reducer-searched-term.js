export default function(state=null, action) {
  switch(action.type) {
    case "DICTIONARY_SEARCH":
      console.log("Searched word", action.payload)
      
      // return Object.assign({}, state, {
      //   searchResponse: action.payload
      // })
      return action.payload
      break

  }

  return state;
}
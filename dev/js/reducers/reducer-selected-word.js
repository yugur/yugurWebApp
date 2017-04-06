export default function(state=null, action) {
  switch(action.type) {
    case "WORD_ENTRY_SELECTED":
      console.log("Selected word")
      return action.payload;
      break;
  }

  return state;
}
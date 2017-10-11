export default function(state=null, action) {
  switch(action.type) {
    case "DISPLAY_LANGUAGE_CHANGED":
      console.log("Selected language", action.payload)
      return action.payload;
      break;
  }

  return state;
}
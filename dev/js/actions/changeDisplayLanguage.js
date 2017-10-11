export const changeDisplayLanguage = (language) => {
  console.log("New Language: ", language)
  return {
  	type: "DISPLAY_LANGUAGE_CHANGED",
  	payload: language
  }
};

export default changeDisplayLanguage;
export const searchDictionary = (searchTerm) => {
  console.log("Search Term: ", searchTerm)
  return {
  	type: "DICTIONARY_SEARCH",
  	payload: searchTerm
  }
};

export default searchDictionary;
export const searchDictionary = (searchTerm) => {
  console.log("Search Term: ", searchTerm)
  return {
  	type: "DICTIONARY_SEARCH_INITIATED",
  	payload: searchTerm
  }
};

export default searchDictionary;
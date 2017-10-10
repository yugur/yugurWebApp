export const searchDictionary = (searchTerm) => {
  console.log("Search Term: ", searchTerm)
  if (searchTerm !== undefined) {
  	return {
	  	type: "DICTIONARY_SEARCH",
	  	payload: searchTerm
	  }
  }
};

export default searchDictionary;
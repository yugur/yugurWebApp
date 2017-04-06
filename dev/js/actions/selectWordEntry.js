export const selectWordEntry = (wordEntry) => {
  console.log("Word Clicked: ", wordEntry.writtenForm)
  return {
  	type: "WORD_ENTRY_SELECTED",
  	payload: wordEntry
  }
};

export default selectWordEntry;
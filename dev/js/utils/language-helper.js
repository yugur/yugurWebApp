
export function getLanguageString(page, id, language, strings) {

  for (let item in strings[page]['items']) {
    
    let string = strings[page]['items'][item]

    if (string['id'] == id) {
      console.log(string[language])
      return string[language]
    }
  }

  return '';
}
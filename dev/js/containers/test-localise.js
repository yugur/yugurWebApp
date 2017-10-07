const content = require('../../assets/test_language.json')

let api = {
  getContent(language = 'en') {
    return content.filter(obj => obj.lang === language)[0];
  }
};

module.exports = api;

var Segmenter = require('./lib/Segmenter');


var opts = {
  MainDictPath: 'lib/dict/main.dic',
  SurnameDictPath: 'lib/dict/surname.dic',
  QuantifierDictPath: 'lib/dict/quantifier.dic',
  SuffixDictPath: 'lib/dict/suffix.dic',
  PrepDictPath: 'lib/dict/preposition.dic',
  StopWordDictPath: 'lib/dict/stopword.dic',
};

var segmenter = new Segmenter(opts);

var txt = '１９９５年１０月，他与中方探讨了在海运、造船方面合作的可能与途径。';
console.log('txt: ', txt);

var result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' Raheem Sterlings volley salvaged a point for 10-man Manchester City as Everton were denied victory on the night Wayne Rooney scored his 200th Premier League goal.';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' 上海自来水来自海上';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' 白化病患者';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' x射线检查由B超组代为实施';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' 乒乓球拍卖完了';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

txt = ' cersei.Lannister@gmail.com';
console.log('txt: ', txt);

result = segmenter.analyze(txt);
console.log('result: ', result);

# chinese-passage-analyzer
Chinese word segmentation implementation based in node.js

# installation

      npm i chinese-passage-analyzer

# core section
Segmenter.js : main entry which calls subordinate segmenters including:

LetterSegmenter.js: handler for english and arabic number chars

CN_QuantifierSegmenter.js: handler for chinese quantifiers

CJKSegmenter.js: handler for common characters in Chinese/Japanese/Korean

IKArbitrator.js: similarity handler (Idea comes from GitHub program IKAnalyzer)

AnalyzeContext.js: analyze the context to handle possible merge or change of property of the current Hit words

#TEST SUITE(From SITRAN Bakeoff 2005)
A recognized chinese segmentation dataset and its training model. Prepared for further instrumented tests(Based on the comparison between analyzer output and standard golden output provided by SITRAN). Does not matter in Audit 1.

# How to use
% node test.js

      var Segmenter = require('node-analyzer');
      var segmenter = new Segmenter();

      var txt = '１９９５年１０月，他与中方探讨了在海运、造船方面合作的可能与途径。';
      console.log('txt: ', txt);

      var result = segmenter.analyze(txt);
      console.log('result: ', result);

      // result:  １９９５年 １０月 ， 他 与 中方 探讨 了 在 海运 、 造船 方面 合作 的 可能 与 途径 。

# Dictionaries
Default Dictionary location:  ./lib/dict，to activate a customised dic: // 全部字段可选

      var opts = {
        MainDictPath: 'your_dict_folder/main.dic',
        SurnameDictPath: 'your_dict_folder/dict/surname.dic',
        QuantifierDictPath: 'your_dict_folder/dict/quantifier.dic',
        SuffixDictPath: 'your_dict_folder/dict/suffix.dic',
        PrepDictPath: 'your_dict_folder/dict/preposition.dic',
        StopWordDictPath: 'your_dict_folder/dict/stopword.dic',
        Config: {
          ext_dict: [],
          ext_stopwords: []
        }
      };
      var segmenter = new Segmenter(opts);

      // var segmenter = new Segmenter();   // use Default Dictionarys



# Performance

     initialization time：1094ms
     segmentation speed：358778.63 words/s, 900763.36 bytes/s, word count：18800，total runing time：52.40ms

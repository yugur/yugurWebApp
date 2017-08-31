var Dictionary = require('./Dictionary'),
  AnalyzeContext = require('./AnalyzeContext'),
  IKArbitrator = require('./IKArbitrator'),
  LetterSegmenter = require('./LetterSegmenter'),
  CN_QuantifierSegmenter = require('./CN_QuantifierSegmenter'),
  CJKSegmenter = require('./CJKSegmenter');

var Segmenter = function(opts){
  this.opts = opts || {};

  this.init();
};

module.exports = Segmenter;

Segmenter.prototype.init = function(){
  //初始化词典单例initialize the single dictionary entries
	Dictionary.initial(this.opts);
	//初始化分词上下文initialize the relating sentences for tag extraction
	this.context = new AnalyzeContext();
	//加载子分词器load the context segmenter
	this.segmenters = this.loadSegmenters();
	//加载歧义裁决器load the similar-word analyzer
	this.arbitrator = new IKArbitrator();
};

/**
 * initialize the dictionaries and 初始化词典，加载子分词器实现
 * @return List<ISegmenter>
 */
Segmenter.prototype.loadSegmenters = function(){
	var segmenters = [];
	//letter segmenter处理字母的子分词器
	segmenters.push(new LetterSegmenter());
	//Chinese Quantifier Segmenter 处理中文数量词的子分词器
	segmenters.push(new CN_QuantifierSegmenter());
	//subordinate segmenter for specified chinese words处理中文词的子分词器
	segmenters.push(new CJKSegmenter());

	return segmenters;
};

/**
   * restore the segmenter 重置分词器到初始状态
   * @param input
   */
Segmenter.prototype.reset = function(input) {
	this.input = input;
	this.context.reset();
	this.context.fillBuffer(input);
	var segmenter;
	for (var i=0;i<this.segmenters.length;i++){
	  segmenter = this.segmenters[i];
	  if (segmenter){
	    segmenter.reset();
	  }
	}
};

Segmenter.prototype.analyze = function(input){
  if (!input) {
    return input;
  }

  this.reset(input);
  //clear up the property of word sequence tuples清除所有的词元属性
	//this.clearAttributes();

	this.context.initCursor();    // ok
	var segmenter, b = true;

	while (b) {
    //traverse the subordinate segmenters遍历子分词器
		for (var i=0;i<this.segmenters.length;i++){
		  segmenter = this.segmenters[i];
		  if (segmenter) {
		    segmenter.analyze(this.context);

		  }
		}

    //字符缓冲区接近读完，需要读入新的字符 when the character buffer is about to be
    //completely processed, a new character will be required
		//if (this.context.needRefillBuffer()){
		//	break;
		//}
		//push the pointer forward 向前移动指针
		b = this.context.moveCursor();
  }
	//handle the similar word closures 对分词进行歧义处理
	this.arbitrator.process(this.context);

	//output the segmentation result to the RESULT closure ,
  //then start handling the uncut CJK characters. 将分词结果输出到结果集，并处理未切分的单个CJK字符
	var result = this.context.outputToResult();

  return result;
};


var Dictionary = require('./Dictionary');
var Lexeme = require('./Lexeme'),
  consts = require('./consts'),
  LexemeType = consts.LexemeType,
  CharType = consts.CharType,
  HitService = require('./HitService'),
  AnalyzeService = require('./AnalyzeService'),
  SortedSetService = AnalyzeService.SortedSetService;
var SEGMENTER_NAME = "CJK_SEGMENTER"; //the name tag 子分词器标签

/**
 *  Chinese-Japanese-Korean segmenter 中文-日韩文子分词器
 */
var CJKSegmenter = function() {
//  this.name = SEGMENTER_NAME;
  //temp raw hits in the queue 待处理的分词hit队列
	this.tmpHits = [];
};

module.exports = CJKSegmenter;

/* (non-Javadoc)
 * @see org.wltea.analyzer.core.ISegmenter#analyze(org.wltea.analyzer.core.AnalyzeContext)
 */
CJKSegmenter.prototype.analyze = function(context) {
	if (CharType.CHAR_USELESS !== context.getCurrentCharType()){
		//优先处理tmpHits中的hit
		if (this.tmpHits.length > 0){
			//处理词段队列
			var hit, tmpArray = [];
			for (var i=0;i<this.tmpHits.length;i++){
			  hit = this.tmpHits[i];
				hit = Dictionary.matchWithHit(context.segmentBuff, context.cursor, hit);
				if (HitService.isMatch(hit)){
					//output current word 输出当前的词
					var newLexeme = new Lexeme(context.buffOffset, hit.begin, context.cursor - hit.begin + 1, LexemeType.TYPE_CNWORD);
					SortedSetService.addLexeme(context.orgLexemes, newLexeme);
					if (HitService.isPrefix(hit)){//is prefix, keep it 是词前缀，留着
						tmpArray.push(hit);
					}
				}
				else if (!HitService.isUnmatch(hit)){
					//the current hit is a complete word, keep it        hit是词，留着
					tmpArray.push(hit);
				}
			}
			this.tmpHits = tmpArray;
		}
		//*********************************
		//try to do single-char-match to current pointed char再对当前指针位置的字符进行单字匹配
		var singleCharHit = Dictionary.matchInMainDict(context.segmentBuff, context.cursor, 1);
		
		if (HitService.isMatch(singleCharHit)){//the first char is a complete word 首字成词
			//output current single-char word 输出当前的词
			var newLexeme = new Lexeme(context.buffOffset, context.cursor, 1, LexemeType.TYPE_CNWORD);
			SortedSetService.addLexeme(context.orgLexemes, newLexeme);
			//it is a word prefix also 同时也是词前缀
			if (HitService.isPrefix(singleCharHit)){
				//if the prefix is matched then put the current Hit into list singleCharHit 前缀匹配则放入hit列表
				this.tmpHits.push(singleCharHit);
			}
		}
		else if (HitService.isPrefix(singleCharHit)){//the first char is a prefix char首字为词前缀
			//if the prefix is matched then put the current Hit into list singleCharHit 前缀匹配则放入hit列表
			this.tmpHits.push(singleCharHit);
		}
	}
	else{
		//if a char in CHAR_USELESS is met 遇到CHAR_USELESS字符
		//then clear the queue清空队列
		this.tmpHits = [];
	}

	//判断缓冲区是否已经读完
/*	if (context.isBufferConsumed()){
		//清空队列
		this.tmpHits = [];
	}*/

	//decide whether to lock the buffer判断是否锁定缓冲区
	if (this.tmpHits.length === 0){
		context.unlockBuffer(SEGMENTER_NAME);
	}
	else{
		context.lockBuffer(SEGMENTER_NAME);
	}
};

CJKSegmenter.prototype.reset = function() {
	this.tmpHits = [];
};

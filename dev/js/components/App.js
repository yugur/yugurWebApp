import React from 'react';
import WordList from '../containers/word-list';

import WordDetail from '../containers/word-detail'
import SearchBar from '../containers/search-bar.js'
import ActionMenu from '../containers/action-menu.js'
import CreateEntry from '../containers/create-entry.js'
{/*import MyImage from '../../images/placeholder.png';*/}
{/*import Img from '../../images/placeholder.png'*/}
import RegistrationForm from '../containers/registration-form';
import LoginForm from '../containers/login-form';
import LanguageSwitcher from '../containers/language-switcher'
import Heading from '../containers/heading'

//import background from '../../assets/bg-1-full.jpg'

require('../../css/main.scss');

let localisation = {
  "menu": {
    "items": [
      {"id": "mainTitle", "English": "Yugur.io", "Mandarin": "裕固语在线词典", "Korean": "유꺼.io"},
      {"id": "AppBanner", "English": "Yugur Online Dictionary", "Mandarin": "欢迎使用裕固语在线词典", "Korean": "유꺼 사전"},
      {"id": "Results", "English": "Word Entries", "Mandarin": "词条查询结果列表", "Korean": "검색결과"},
      {"id": "Selections", "English": "Word Details", "Mandarin": "词条释义", "Korean": "자세한 내용"},
      {"id": "Login", "English": "Login", "Mandarin": "账号登录", "Korean": "로그인"},
      {"id": "Username", "English": "Username", "Mandarin": "账户名", "Korean": "아이디"},
      {"id": "Password", "English": "Password", "Mandarin": "密码", "Korean": "비밀번호"},
      {"id": "Register", "English": "Sign up", "Mandarin": "注册账号", "Korean": "회원가입"},
      {"id": "Home", "English": "Back to the home page", "Mandarin": "返回网站首页", "Korean": "홈에 나가기"},
      {"id": "Definition", "English": "Definition", "Mandarin": "定義", "Korean": "정의"},
      {"id": "Language", "English": "Language", "Mandarin": "語言", "Korean": "언어"},
      {"id": "Headword", "English": "Headword", "Mandarin": "首词", "Korean": "단어"},
      {"id": "AddWord", "English": "Add a Word", "Mandarin": "增加词条", "Korean": "단어 추가"},
      {"id": "CreateWord", "English": "Create Word", "Mandarin": "创建词条", "Korean": "단어 만들기"},
      {"id": "Search", "English": "Search", "Mandarin": "查询词条", "Korean": "검색"},
      {"id": "English", "English": "English", "Mandarin": "英语", "Korean": "영어"},
      {"id": "Chinese", "English": "Chinese", "Mandarin": "汉语", "Korean": "중국어"},
      {"id": "Yugur", "English": "Yugur", "Mandarin": "裕固语", "Korean": "유꺼말"},
      {"id": "Korean", "English": "Korean", "Mandarin": "韩语", "Korean": "한국어"},      
      {"id": "DictionarySelection0", "English": "Yugur->English", "Mandarin": "裕固语->英语", "Korean": "유꺼말->영어"},
      {"id": "DictionarySelection1", "English": "Yugur->Yugur", "Mandarin": "裕固语->裕固语", "Korean": "유꺼말->유꺼"},
      {"id": "DictionarySelection2", "English": "Yugur->Chinese", "Mandarin": "裕固语->汉语", "Korean": "유꺼말->중국어"},
      {"id": "DictionarySelection3", "English": "English->Yugur", "Mandarin": "英语->裕固语", "Korean": "영어->유꺼말"},
      {"id": "DictionarySelection4", "English": "Chinese->Yugur", "Mandarin": "汉语->裕固语", "Korean": "중국어->유꺼말"},
      {"id": "SwitchToChinese", "English": "Switch to Chinese", "Mandarin": "切换为汉语显示", "Korean": ""},
      {"id": "SwitchToEnglish", "English": "Switch to English", "Mandarin": "切换为英语显示", "Korean": ""},

      {"id": "Words", "English": "Words", "Mandarin": "单词", "Korean": "단어"},
      {"id": "Semantics", "English": "Semantics", "Mandarin": "'语义", "Korean": "의미론"},
      {"id": "Alphabets", "English": "Alphabets", "Mandarin": "字母表", "Korean": "알파벳"},
      {"id": "SelectLanguage", "English": "Select Language", "Mandarin": "选择语言", "Korean": "언어 선택"},
      {"id": "DeleteWord", "English": "Delete Word", "Mandarin": "删除词条", "Korean": "단어 삭제"},
      {"id": "SelectAWord", "English": "Select a word", "Mandarin": "选择词条", "Korean": "단어를 선택하십시오."},
      {"id": "SearchTheDictionary", "English": "Search the dictionary", "Mandarin": "选择词典类型", "Korean": "사전 검색"},
      {"id": "Export", "English": "Export", "Mandarin": "出口", "Korean": "내보내기"},
    ]
  }
}


const App = () => (
    <div className={'app'}>

      {/*Banner*/}
      <header>
      {/*<div>*/}
        <br/>
          <Heading localisation={localisation}></Heading>

        {/*<div className={'account'}>
        <RegistrationForm localisation={localisation}></RegistrationForm>
        </div>*/}

        <div className={'account'}>
        <LoginForm localisation={localisation}></LoginForm>
        </div>

        <br/>
      {/*</div>*/}
      </header>

      {/*Main content*/}
      <section className={'mainView'}>

        {/*<div className={'mainView'}>*/}
        <div className={'language-switcher'}>
      <LanguageSwitcher localisation={localisation}></LanguageSwitcher>
        </div>
      	<hr/>

        <SearchBar localisation={localisation}></SearchBar>
      	<hr/>
      	<br/>
        
      	<WordList localisation={localisation}></WordList>

        <WordDetail localisation={localisation}></WordDetail>

        <div className={'action-block'}>
        <ActionMenu localisation={localisation}></ActionMenu>
        </div>

        <br/>
        {/*</div>*/}
      </section>

      <CreateEntry localisation={localisation}></CreateEntry>
    </div>
);

export default App;

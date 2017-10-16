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
      {"id": "mainTitle", "English": "Yugur.io", "Mandarin": "裕固语在线词典"},
      {"id": "AppBanner", "English": "Yugur Online Dictionary", "Mandarin": "欢迎使用裕固语在线词典"},
      {"id": "Results", "English": "Word Entries", "Mandarin": "词条查询结果列表"},
      {"id": "Selections", "English": "Word Details", "Mandarin": "词条释义"},
      {"id": "Login", "English": "Login", "Mandarin": "账号登录"},
      {"id": "Username", "English": "Username", "Mandarin": "账户名"},
      {"id": "Password", "English": "Password", "Mandarin": "密码"},
      {"id": "Register", "English": "Sign up", "Mandarin": "注册账号"},
      {"id": "Home", "English": "Back to the home page", "Mandarin": "返回网站首页"},
      {"id": "Definition", "English": "Definition", "Mandarin": "定義"},
      {"id": "Language", "English": "Language", "Mandarin": "語言"},
      {"id": "Headword", "English": "Headword", "Mandarin": "首词"},
      {"id": "AddWord", "English": "Add a Word", "Mandarin": "增加词条"},
      {"id": "CreateWord", "English": "Create Word", "Mandarin": "创建词条"},
      {"id": "Search", "English": "Search", "Mandarin": "查询词条"},
      {"id": "English", "English": "English", "Mandarin": "英语"},
      {"id": "Chinese", "English": "Chinese", "Mandarin": "汉语"},
      {"id": "Yugur", "English": "Yugur", "Mandarin": "裕固语"},
      {"id": "DictionarySelection0", "English": "Yugur->English", "Mandarin": "裕固语->英语"},
      {"id": "DictionarySelection1", "English": "Yugur->Yugur", "Mandarin": "裕固语->裕固语"},
      {"id": "DictionarySelection2", "English": "Yugur->Chinese", "Mandarin": "裕固语->汉语"},
      {"id": "DictionarySelection3", "English": "English->Yugur", "Mandarin": "英语->裕固语"},
      {"id": "DictionarySelection4", "English": "Chinese->Yugur", "Mandarin": "汉语->裕固语"},
      {"id": "SwitchToChinese", "English": "Switch to Chinese", "Mandarin": "切换为汉语显示"},
      {"id": "SwitchToEnglish", "English": "Switch to English", "Mandarin": "切换为英语显示"},

      {"id": "Words", "English": "Words", "Mandarin": "单词"},
      {"id": "Semantics", "English": "Semantics", "Mandarin": "'语义"},
      {"id": "Alphabets", "English": "Alphabets", "Mandarin": "字母表"},
      {"id": "SelectLanguage", "English": "Select Language", "Mandarin": "选择语言"},
      {"id": "DeleteWord", "English": "Delete Word", "Mandarin": "删除词条"},
      {"id": "SelectAWord", "English": "Select a word", "Mandarin": "选择词条"},
      {"id": "SearchTheDictionary", "English": "Search the dictionary", "Mandarin": "选择词典类型"},
      {"id": "Export", "English": "Export", "Mandarin": "出口"},
      {"id": "WordType", "English": "Word Type", "Mandarin": "词性"},
      {"id": "WordLanguage", "English": "Word Language", "Mandarin": "单词源语言"},
      {"id": "DefinitionLanguage", "English": "Definition Language", "Mandarin": "单词释义源语言"},

      {"id": "Noun", "English": "Noun", "Mandarin": "名詞"},
      {"id": "Adjective", "English": "Adjective", "Mandarin": "形容詞"},
      {"id": "Verb", "English": "Verb", "Mandarin": "動詞"}
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

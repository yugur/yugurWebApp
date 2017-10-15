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

require('../../css/main.scss');

const imgUrl = require(`../../assets/placeholder.png`);
//require('../../assets/placeholder.png');

const App = () => (
    <div className={'app'}>

      {/*Banner*/}
      <header>
      {/*<div>*/}
        <br/>
    	   <h1>Welcome To Yugur.io</h1>

        <div className={'account'}>
        <RegistrationForm></RegistrationForm>
        </div>

        <div className={'account'}>
        <LoginForm></LoginForm>
        </div>

        <br/>
      {/*</div>*/}
      </header>

      {/*Main content*/}
      <section className={'mainView'}>

        {/*<div className={'mainView'}>*/}
        <div className={'language-switcher'}>
      <LanguageSwitcher></LanguageSwitcher>
        </div>
      	<hr/>

        <SearchBar></SearchBar>
      	<hr/>
      	<br/>

        <div className={'selections'}>
      	<h2 className={'heading'}>Word Entries:</h2>
      	<WordList className={'wordEntry'}></WordList>
        </div>


        <div className={'results'}>
      	<h2>Word Details:</h2>
        <WordDetail></WordDetail>
        </div>

        <div className={'action-block'}>
        <ActionMenu></ActionMenu>
        </div>

        <br/>
        {/*</div>*/}
      </section>

      <section className={'mainView'} id={'comments'}>
        <h2 className={'heading'}>Add a Word</h2>
        <CreateEntry></CreateEntry>
      </section>
    </div>
);

export default App;

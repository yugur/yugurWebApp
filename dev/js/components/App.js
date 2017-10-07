import React from 'react';
import WordList from '../containers/word-list';

import WordDetail from '../containers/word-detail'
import SearchBar from '../containers/search-bar.js'
import ActionMenu from '../containers/action-menu.js'
{/*import MyImage from '../../images/placeholder.png';*/}
{/*import Img from '../../images/placeholder.png'*/}
import RegistrationForm from '../containers/registration-form';
import LoginForm from '../containers/login-form';

require('../../css/main.scss');

//localisation
var now = [
  require('../../../test_language.json')
];

const App = () => (
    <div className={'app'}>

      {/*Banner*/}
      <header>
      {/*<div>*/}
        <br/>
    	   <h1>{now[0][1].Mandarin}</h1>


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
      	<hr/>

        <SearchBar></SearchBar>
      	<hr/>
      	<br/>

        <div className={'selections'}>
      	<h2 className={'heading'}>{now[0][2].Mandarin}:</h2>
      	<WordList className={'wordEntry'}></WordList>
        </div>


        <div className={'results'}>
      	<h2>{now[0][3].Mandarin}:</h2>
        <WordDetail></WordDetail>
        </div>

        <div className={'action-block'}>
        <ActionMenu></ActionMenu>
        </div>

        <br/>
        {/*</div>*/}
      </section>

      <div className={'mainView'} id={'comments'}>

      </div>
    </div>
);

export default App;

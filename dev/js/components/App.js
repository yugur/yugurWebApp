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

const App = () => (
    <div className={'app'}>

      {/*Banner*/}
      <header>
        <br/>
    	   <h1>Welcome To Yugur.io</h1>
        <br/>
      </header>

      {/*Main content*/}
      <section className={'mainView'}>
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
      </section>
    </div>
);

export default App;

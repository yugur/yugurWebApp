import React from 'react';
import WordList from '../containers/word-list';
import WordDetail from '../containers/word-detail';
import SearchBar from '../containers/search-bar';
import RegistrationForm from '../containers/registration-form';
import LoginForm from '../containers/login-form';
require('../../css/main.scss');

const App = () => (
    <div className={'app'}>
      <header>
        <br/>
        <div>
          <span>
    	     <h1 className={'headerLogo'}>Yugur.io</h1>
          </span>
          {/*
          <span>
            <SearchBar className={'searchBar'}></SearchBar>
          </span>

          <span>
            <h3 className={'username'}>UserName</h3>
          </span>
          */}
        </div>
        <br/>
      </header>
      <section className={'mainView'}>
      	<hr/>
      	<hr/>
        <div>
        	<br/>
        	<h2 className={'heading'}>Word Entries:</h2>
        	<WordList className={'wordEntry'}></WordList>
          <br/>
        	<hr/>
          <br/>
        	<h2>Word Details:</h2>
          <WordDetail></WordDetail>
          <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <hr/>

        <br/>
        <div>
          <span className={'authSection'}>
            <RegistrationForm></RegistrationForm>
          </span>
          <span className={'authSection'}>
            <LoginForm></LoginForm>
          </span>
        </div>
      </section>
    </div>
);

export default App;
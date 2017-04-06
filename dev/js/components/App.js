import React from 'react';
import WordList from '../containers/word-list';
import WordDetail from '../containers/word-detail'
require('../../css/main.scss');

const App = () => (
    <div className={'app'}>
      <header>
        <br/>
    	  <h1>Welcome To Yugur.io</h1>
        <br/>
      </header>
      <section className={'mainView'}>
      	<hr/>
      	<hr/>
      	<br/>
      	<h2 className={'heading'}>Word Entries:</h2>
      	<WordList className={'wordEntry'}></WordList>
        <br/>
      	<hr/>
        <br/>
      	<h2>Word Details:</h2>
        <WordDetail></WordDetail>
        <br/>
      </section>
    </div>
);

export default App;
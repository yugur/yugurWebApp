import React from 'react';
import WordList from '../containers/word-list';
import WordDetail from '../containers/word-detail'
import SearchBar from '../containers/search-bar.js'
{/*import MyImage from '../../images/placeholder.png';*/}
{/*import Img from '../../images/placeholder.png'*/}

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

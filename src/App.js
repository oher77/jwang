import React, { Component } from 'react';
import './css/App.css';
import Subject  from './component/Subject';
import TOCStory  from './component/TOCStory';
import TOCMail from './component/TOCMail';
import ReadContents from './component/ReadContents';
import Control from './component/Control';

class App extends Component {
  render(){
    return (
      <div className="wrap">
        <navigator>
          <Subject></Subject>     
          <TOCStory></TOCStory>
          <TOCMail></TOCMail>
        </navigator>
        <main>
          <div className="story-bg">
            <ReadContents></ReadContents>
          </div>
          <Control></Control>
        </main>
      </div>
    );    
  }
}

export default App;

import React,{Component} from 'react';
import './App.css';

import Header from "./components/Header"
import imageWizard from './img/wizard.jpg'

class App extends Component {
  render () {
    return (
      <div>
        <Header imageWizard = {imageWizard} />
      </div>
    )
  }
}

export default App;

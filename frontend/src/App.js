import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faPlus)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         {/* App Component Has a Child Component called Main*/}
         <Main/>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;

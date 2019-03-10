import React  from 'react';
import ReactDOM from 'react-dom'
import HeaderContainer from './Header'
import FooterContainer from './Footer'
import Home from './home'
require('../scss/style.scss')
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends React.Component {
  render() {
    return (
        <div>
            <HeaderContainer />
            <Home/>
            <FooterContainer />
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
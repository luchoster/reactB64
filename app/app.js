import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import MainForm from './components/mainForm'
import Encode from './components/encode'
import Decode from './components/decode'
import '../public/css/style.css'
import '../public/css/animate.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Miss component={MainForm} />
          <Match exactly pattern='/' component={MainForm} />
          <Match exactly pattern='/encode' component={Encode} />
          <Match exactly pattern='/decode' component={Decode} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

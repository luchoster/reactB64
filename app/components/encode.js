import React from 'react'
import Header from './header'

const Encode = React.createClass({
  getInitialState () {
    return {
      encodedString: ''
    }
  },
  handleEncode (event) {
    this.setState({encodedString: window.btoa(unescape(encodeURIComponent(event.target.value)))})
  },
  render () {
    return (
      <div>
        <Header />
        <div className='row content-wrapper align-middle'>
          <h3 className='large-12 columns center'>B64 Encoder</h3>
          <div className='columns'>
            <textarea onChange={this.handleEncode} cols='30' rows='15' />
          </div>
          <div className='columns'>
            <textarea className='text-result' value={this.state.encodedString} readOnly cols='30' rows='15' />
          </div>
        </div>
      </div>
    )
  }
})

export default Encode

import React from 'react'
import Header from './header'

const Decode = React.createClass({
  getInitialState () {
    return {
      decodedString: ''
    }
  },
  handleDecode (event) {
    this.setState({decodedString: decodeURIComponent(escape(window.atob(event.target.value)))})
  },
  render () {
    return (
      <div>
        <Header />
        <div className='row content-wrapper align-middle'>
          <h3 className='large-12 columns center'>B64 Decoder</h3>
          <div className='columns'>
            <textarea onChange={this.handleDecode} cols='30' rows='15' />
          </div>
          <div className='columns'>
            <textarea className='text-result' value={this.state.decodedString} readOnly cols='30' rows='15' />
          </div>
        </div>
      </div>
    )
  }
})

export default Decode

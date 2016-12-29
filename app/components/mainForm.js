import React from 'react'
import { Link } from 'react-router'
import Header from './header'

const MainForm = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='row content-wrapper center'>
          <h3 className='large-12 align-self-middle columns center'>B64 Encoder/Decoder</h3>
          <div className='columns align-self-middle'>
            <h2><Link className='button large' to='/encode'>Encode</Link></h2>
          </div>
          <div className='columns align-self-middle'>
            <h2><Link className='button large' to='/decode'>Decode</Link></h2>
          </div>
        </div>
      </div>
    )
  }
})

export default MainForm

import React from 'react'
import Signin from '../containers/Signin'
import Footer from '../containers/Footer'

export default function SignIn() {
  return (
    <>
      <div className="header">
        <Signin />
        <div className="brk"></div>
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </>
  )
}

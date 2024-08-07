import React from 'react'
import Signup_Login_Header from './Signup_Login_Header'
import Form from './Form'



const Container = () => {
    return (
      <div className='w-[319px] absolute   top-[111px]'>
          <Signup_Login_Header heading="Sign up" paragraph="Just a few quick things to get started"/>
          <Form/>
      </div>
    )
  }
  
  export default Container
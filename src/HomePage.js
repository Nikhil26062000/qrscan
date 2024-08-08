import React from 'react'
// import ButtonsClick from './components/ButtonsClick'
import RedirectButton from './components/REdirectButton'

const HomePage = () => {
  return (
    <div className="w-[90%] h-40vh mx-auto flex justify-center mt-[20%] flex-wrap gap-10">
     <RedirectButton  path="/qrscan/login">login</RedirectButton>
     <RedirectButton  path="/qrscan/qrcode">qrcode scanner</RedirectButton>
     <RedirectButton  path="/qrscan/address">address</RedirectButton>
     <RedirectButton  path="/qrscan/notificationOn">notificationOn</RedirectButton>
     <RedirectButton  path="/qrscan/notificationOff">notificationOff</RedirectButton>
     <RedirectButton  path="/qrscan/language">language</RedirectButton>
     <RedirectButton  path="/qrscan/managePassword">managePassword</RedirectButton>
     <RedirectButton  path="/qrscan/defaultAddress">defaultAddress</RedirectButton>
     <RedirectButton  path="/qrscan/account">account</RedirectButton>
     <RedirectButton  path="/qrscan/dashboard">dashboard</RedirectButton>
     <RedirectButton  path="/qrscan/kit">kit</RedirectButton>
     <RedirectButton  path="/qrscan/signup">signup</RedirectButton>
     <RedirectButton  path="/qrscan/discussion">discussion</RedirectButton>
    </div>
  )
}

export default HomePage
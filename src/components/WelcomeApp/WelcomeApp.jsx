import React, { useState } from 'react'

// import './WelcomeApp.css'

const WelcomeApp = () => {
    const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <div className='bg-[#1e293b] flex flex-col items-center justify-center h-screen'>
      <h1 className='text-[#f0bb03] text-5xl font-serif font-bold py-4'>Welcome</h1>
      <p className='text-white font-mono text-xl py-2'>Thank you! Happy Learning</p>
      <button className='bg-white font-bold w-32 py-2 rounded-lg' onClick={() => setIsSubscribe(!isSubscribe)}>{isSubscribe ? 'Subscribed' : 'Subscribe'}</button>
    </div>
  )
}

export default WelcomeApp

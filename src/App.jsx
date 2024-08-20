import React from 'react' 
import Home from './Components/Home'
import Footer from './Components/Footer'
import Nav from './Components/Nav'

const App = () => {
  return (
    <>
    <Nav/>
     <div className=' flex flex-col gap-10 lg:gap-20'>
      <Home/>   
     </div>
     <Footer/>
    </>
  )
}

export default App

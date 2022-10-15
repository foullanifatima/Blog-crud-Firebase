import React from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Show from '../Components/Show'

function Home() {
  return (
    <div>
      <Main />
      <div className="container blog-container">
        <div className="row">
          <Show />
          <div className="col-lg-1"></div>
          <About />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

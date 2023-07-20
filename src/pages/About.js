import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
        <div className='row about'>
          <div className='col-md-6'>
            <img src='\images\Self.jpg' alt='about' className='about-image' />
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>ABOUT</h1>
            <p className='text-justify mt-2'>
              Konnichiwa minna! I am Rohan Shetty, am aspiring web developer and a machine learning enthusiast.
              This project is basically an anime merch website just like your amazon but only for us weebs.
            </p>
          </div>
        </div>  
    </Layout>
  )
}

export default About
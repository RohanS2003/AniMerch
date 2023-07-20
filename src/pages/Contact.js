import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";


const Contact = () => {
  return (
    <Layout>
        <div className='row contactus'>
            <div className='col-md-6'>
                <img src='\images\contact.png' alt='contactus' className='contact-image' />
            </div>
            <div className='col-md-4'>
                <h1 className='bg-dark p-2 text-white text-center'>CONTACT ME</h1>
                <p className='text-justify mt-2'>
                    For any queries please contact me
                </p>
                <p className="mt-3">
                    <BiMailSend /> : shettyrohan123@gmail.com
                </p>
                <p className="mt-3">
                    <BiPhoneCall /> : +91-9876543210
                </p>
                <p className="mt-3">
                    <BiSupport /> : 1800-0000-0000 (toll free)
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Contact
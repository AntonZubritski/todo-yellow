import React from 'react'
import Header from '../header'
import "./contact-page.css"

const ContactPage = () => {
  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <div className="block-in contact">
            <h3>Contact us</h3>
            <ul className="contact-block">
                <li>London Baker street 221b</li>
                <li>Mr. LogoBear Doyle</li>
                <li>+44 203 769 18 34</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
export default ContactPage

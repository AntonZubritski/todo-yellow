import React from 'react'
import ContainerWrapper from '../menu-mobile-wrapper'

const BlockContact = () => (
  <div className="block-in contact">
    <h3>Contact us</h3>
    <ul className="contact-block">
      <li>London Baker street 221b</li>
      <li>Mr. LogoBear Doyle</li>
      <li>+44 203 769 18 34</li>
    </ul>
  </div>
)
const InfoContainer = () => ContainerWrapper(BlockContact)

export default InfoContainer
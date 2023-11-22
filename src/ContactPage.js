import React from 'react';
import Navbar from './Navbar';
import './ContactPage.css';

const ContactPage = () => (
  <div>
    <Navbar tab="contact"/>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you are interested in having a vending machine set up on your property, please contact us.
           Whatever the type of machine or product you want, we will do our best to serve your needs.
        </p>
        <div className="contact-details">
        <p>Name: Michael Orr</p>
        <p>Phone: (825) 461-0294</p>
        <p>Email: michael.orr@tastytrovevending.ca</p>
        </div>
    </section>
  </div>
);

export default ContactPage;
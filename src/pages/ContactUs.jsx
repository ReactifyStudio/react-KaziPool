import React from 'react'
import Contact from '../assets/ContactUs.svg'

function ContactUs() {
    return (
        <div class="container">
		<div class="contact-box">
			<div class="left">
                <img src={Contact} alt=""/>
            </div>
			<div class="right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name"/>
				<input type="text" class="field" placeholder="Your Email"/>
				<input type="text" class="field" placeholder="Phone"/>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
    )
}

export default ContactUs

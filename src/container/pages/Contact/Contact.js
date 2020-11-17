import React from 'react'
import classes from './Contact.module.css'

function Contact() {
    return (
        <main className={classes.Contact}>
            <div className={classes.list}>
                <ul>
                <li><div><p style={{margin: '0'}}>Lives in</p></div> <a href="https://www.google.com/maps/place/Puyallup,+WA/@47.1741743,-122.3078999,14.68z/data=!4m5!3m4!1s0x5490fc05b125ffc3:0x5bd41d59690ff10b!8m2!3d47.1853785!4d-122.2928974">Puyallup, WA, US</a></li>
                <li><div>Email</div> <a href="mailto: samngestep@gmail.com">samngestep@gmail.com</a></li>
                <li><div>Phone</div> <a href="tel: +12532582324">+1 (253) 258-2324</a></li>
           
                </ul>

            </div>
                <div className={classes.question}>
                    <h2>Got Questions?</h2>
                    <p>Please hit me up on my Personal Live Chat, or <span>click on</span> my Email and Phone!</p>
                </div>

        </main>
    )
}

export default Contact

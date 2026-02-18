import React from 'react'
import classes from './Contact.module.css'

function Contact() {
    return (
        <main className={classes.Contact}>
            <div className={classes.list}>
                <ul>
                <li><div><p style={{margin: '0'}}>Lives in</p></div> <a href="https://www.google.com/maps/place/Katy,+TX/">Katy, TX, United States</a></li>
                <li><div>Email</div> <a href="mailto:samngestep2@gmail.com">samngestep2@gmail.com</a></li>
                <li><div>Phone</div> <a href="tel: +12532582324">+1 (253) 258-2324</a></li>
           
                </ul>

            </div>
                <div className={classes.question}>
                    <h2>Got Questions?</h2>
                    <p>Please hit me up on my Personal Live Chat, or click on my Email and Phone!</p>
                </div>

        </main>
    )
}

export default Contact

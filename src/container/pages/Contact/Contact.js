import React from 'react'
import classes from './Contact.module.css'

function Contact() {
    return (
        <main className={classes.Contact}>
            <div className={classes.list}>
                <ul>
                <li><div><p style={{margin: '0'}}>Lives in</p></div> <a href="https://www.google.com/maps/d/viewer?mid=1pXM7dHSyUqd-_rYZQrXXoh9IVUY&hl=en&ie=UTF8&msa=0&ll=29.82634799999999%2C-95.39291400000002&spn=0.669553%2C1.454315&z=10">Houston, TX, US</a></li>
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

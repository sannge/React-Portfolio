import React from "react";
import classes from "./Aboutme.module.css";
function Aboutme() {
	return (
		<div className={classes.AboutmeContainer}>
			<h2>About</h2>
			<div className={classes.AboutmeMainAndProfile}>
				{/* <div className={classes.AboutmeImage}>
                    <img src={AboutmeProfile} alt="profile"/>
                </div> */}
				<div className={classes.AboutmeMain}>
					<p>
						I am a Proactive Full Stack Developer currently
						working for Bitbroker Labs.  I
						spend most of my free time learning new topics on web and mobile development and
						building projects with them. I am comfortable building MERNG Stack and PERNG Stack applications and familiar building Social Media Applications, e-commerce
						Websites, Affiliate Tracking Platforms, and more. My hobbies are Coding, Hiking, and Cooking. I am also open to work currently, either in-person or remote, and willing to relocate anywhere in the US.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Aboutme;

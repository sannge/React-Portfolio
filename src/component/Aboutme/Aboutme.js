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
						Full-Stack Software Engineer with nearly a decade of technical
						experience, recently promoted to IT Manager at Foxconn Industrial
						Internet (FII-NA). I architect enterprise manufacturing systems and
						deploy AI-powered applications to production, having delivered 15+
						applications serving 1,000+ daily users across 6 business units. I
						design and ship RAG-based AI agents using OpenAI Agent SDK and
						PostgreSQL pgvector. My core expertise is in C# / .NET Core,
						Next.js, React, SQL Server, and LLM engineering.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Aboutme;

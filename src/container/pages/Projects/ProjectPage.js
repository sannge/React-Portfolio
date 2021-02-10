import React, { useState } from "react";
import classes from "./ProjectPage.module.css";
import Projects from "../../../component/Projects/Projects";
import SearchBar from "../../../component/SearchBar/SearchBar";
import BurgerProject from "../../../assets/project-images/burgerBuilderProject.png";
import Connect6Project from "../../../assets/project-images/connect6Project.png";
import xResearchProject from "../../../assets/project-images/xResearchProject.png";
import MERNForm from "../../../assets/project-images/MERNMultiStepForm.png";
import Socix from "../../../assets/project-images/SocixProject.png";
import SlackClone from "../../../assets/project-images/SlackClone.png";

import Refmonkey from "../../../assets/project-images/Refmonkey.png";
function ProjectPage() {
	const [text, setText] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [paginateData, setPaginateData] = useState({
		offset: 0,
		tableData: [],
		orgTableData: [],
		perPage: 1,
		currentPage: 0,
	});
	const [state] = useState([
		{
			image: Socix,
			header: "Social Media  Web Application (On Progress)",
			tags: [
				"ReactJS",
				"ContextAPI",
				"MySQL",
				"Sequelize",
				"GraphQL",
				"GraphQLSubscription",
				"WebRTC",
				"Express",
				"Node.js",
				"MaterialUI",
			],
			desc: [
				"A Single Page PERNG stack Social Media Application with real time data transfer",
				"Implemented using latest technologies such as GraphQL Subscriptions, WebRTC to be able to receive and update live information",
				"Secure Authentication",
			],
			source: "https://github.com/sannge/Socix-for-Social",
		},
		{
			image: SlackClone,
			header: "Full Stack Slack Clone Application",
			tags: [
				"ReactJS",
				"InMemoryCache",
				"PostgresSQL",
				"Sequelize",
				"GraphQL",
				"GraphQLSubscription",
				"Express",
				"Node.js",
				"SemanticUI",
			],
			desc: [
				"Full Stack Slack Replica using PERNG stack, deployed with docker and docker compose on. Deployed the frontend on AWS S3 with cloudfront, and backend on EC2 with docker-compose",
				"Hosted files(images/videos) on AWS S3 bucket and used aws-sdk to handle file uploads.",
			],
			source: "http://slack-clone-client.s3-website-us-west-2.amazonaws.com/",
		},
		{
			image: MERNForm,
			header: "Athelete Profile Creator with MultiStep Form",
			tags: [
				"Javascript",
				"React",
				"Express",
				"MongoDB",
				"Node.js",
				"Heroku",
				"GLocationService",
				"TailwindCSS",
			],
			desc: [
				"MERN stack Athelete Profile Bank",
				"Multistep Form Automation",
				"Google Map Location API to autocomplete, and throw error on non-existing Locations",
			],
			source: "https://mighty-sands-65048.herokuapp.com",
		},
		{
			image: Refmonkey,
			header: "RefMonkey SAAS Web Application (Co-Developer)",
			tags: [
				"ReactJS",
				"GraphQL",
				"HTML5",
				"CSS3",
				"MongoDB",
				"ExpressJS",
				"TailwindCSS",
			],
			desc: [
				"Referral Web Application/Business for Online Stores and Businesses",
				"Built features; edit profile settings, multiple langauge feature, Ad-Attribution System, and more ... ",
			],
			source: "https://refmonkey.com",
		},
		{
			image: BurgerProject,
			header: "Burger Builder Web Application (React & Firebase)",
			tags: [
				"ReactJS",
				"Redux",
				"CSS3",
				"REST",
				"HTML5",
				"Realtime",
				"Firebase",
			],
			desc: [
				"A Single Page Fully Functional Web Application for Burger Ordering",
				"Users can visualize freshly-built  burger in real-time",
				"Includes secure Authentication",
			],
			source: "https://github.com/sannge/Burger-builder-Ractjs-",
		},
		{
			image: Connect6Project,
			header: "Connect 6 Multiplayer Game",
			tags: ["Javascript", "Java", "REST", "HTML5", "CSS3"],
			desc: [
				"A Multi-Page Fully Functional Connect-6 Game",
				"Allows live view of the current games to other players",
				"Includes secure Authentication and Leaderboard System",
			],
			source: "https://github.com/sannge/CunningCoders",
		},
		{
			image: xResearchProject,
			header: "X-Research Desktop Application (Cross Platform)",
			tags: ["AI", "ElectronJS", "Javascript", "Java", "REST", "HTML5", "CSS3"],
			desc: [
				"AI based Research Paper Generator",
				"Automatic Citation and Bibliography generation on Paper Creation",
				"Built-in text-summarizer",
			],
			source: "https://github.com/sannge/CunningCoders",
		},
	]);

	return (
		<div className={classes.Projects}>
			<Projects
				paginateData={paginateData}
				setPaginateData={setPaginateData}
				submitted={submitted}
				setSubmitted={setSubmitted}
				state={state}
				text={text}
				setText={setText}
			/>
		</div>
	);
}

export default ProjectPage;

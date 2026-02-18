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

import PMS from "../../../assets/project-images/PMS.png";
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
			image: PMS,
			header: "AI Project Management & Knowledge Base System",
			tags: [
				"Electron",
				"TypeScript",
				"LangGraph",
				"PostgreSQL",
				"pgvector",
				"Knowledge Graphs",
				"OpenAI API",
				"RAG",
				"Redis",
				"Meilisearch",
				"MinIO",
				"TanStack Query",
			],
			desc: [
				"Jira-like project management platform with integrated AI knowledge base, built as both web and Electron desktop app",
				"Combines RAG and Knowledge Graphs for semantic search across project documentation",
				"Redis Cluster caching, Meilisearch full-text search, MinIO object storage, and offline-first sync via TanStack Query and IndexedDB",
			],
			source: "https://github.com/sannge/PMS",
		},
		{
			image: Refmonkey,
			header: "RefMonkey - Affiliate Tracking SaaS Platform",
			tags: [
				"React",
				"Node.js",
				"Express",
				"MongoDB",
				"Stripe",
				"Square",
				"Zapier",
				"OAuth",
				"REST API",
			],
			desc: [
				"Full SaaS affiliate tracking platform with company and user dashboards",
				"Stripe and Square payment integration with Zapier workflow automation and OAuth authentication",
				"Injectable tracking snippets for Shopify, Wix, SquareSpace, Ecwid, and custom sites",
			],
			source: "https://refmonkey.com",
		},
		{
			image: SlackClone,
			header: "Full Stack Slack Clone Application",
			tags: [
				"ReactJS",
				"InMemoryCache",
				"PostgreSQL",
				"Sequelize",
				"GraphQL",
				"GraphQL Subscriptions",
				"Express",
				"Node.js",
				"SemanticUI",
			],
			desc: [
				"Full Stack Slack replica using PERNG stack, deployed with Docker and Docker Compose",
				"Frontend on AWS S3 with CloudFront, backend on EC2 with Docker Compose",
				"File hosting (images/videos) on AWS S3 with aws-sdk for uploads",
			],
			source: "http://slack-clone-client.s3-website-us-west-2.amazonaws.com/",
		},
		{
			image: Socix,
			header: "Social Media Web Application",
			tags: [
				"ReactJS",
				"ContextAPI",
				"MySQL",
				"Sequelize",
				"GraphQL",
				"GraphQL Subscriptions",
				"WebRTC",
				"Express",
				"Node.js",
				"MaterialUI",
			],
			desc: [
				"Single Page PERNG stack Social Media Application with real-time data transfer",
				"GraphQL Subscriptions and WebRTC for live information updates",
				"Secure authentication with Context API state management",
			],
			source: "https://github.com/sannge/Socix-for-Social",
		},
		{
			image: MERNForm,
			header: "Athlete Profile Creator with MultiStep Form",
			tags: [
				"JavaScript",
				"React",
				"Express",
				"MongoDB",
				"Node.js",
				"Heroku",
				"Google Maps API",
				"TailwindCSS",
			],
			desc: [
				"MERN stack Athlete Profile Bank with multistep form automation",
				"Google Maps Location API for autocomplete and location validation",
			],
			source: "https://mighty-sands-65048.herokuapp.com",
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
				"Firebase",
			],
			desc: [
				"Single Page burger ordering application with real-time visualization",
				"Redux state management with Firebase backend and secure authentication",
			],
			source: "https://github.com/sannge/Burger-builder-Ractjs-",
		},
		{
			image: Connect6Project,
			header: "Connect 6 Multiplayer Game",
			tags: ["JavaScript", "Java", "REST", "HTML5", "CSS3"],
			desc: [
				"Multi-page fully functional Connect-6 game with live game viewing",
				"Secure authentication and leaderboard system",
			],
			source: "https://github.com/sannge/CunningCoders",
		},
		{
			image: xResearchProject,
			header: "X-Research Desktop Application (Cross Platform)",
			tags: ["AI", "ElectronJS", "JavaScript", "Java", "REST", "HTML5", "CSS3"],
			desc: [
				"AI-based Research Paper Generator with automatic citation and bibliography generation",
				"Built-in text summarizer for research content",
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

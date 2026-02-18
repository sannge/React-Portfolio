import React,{useState} from 'react'
import Experiences from '../../../component/Experiences/Experiences'
import classes from './ExperiencePage.module.css'
import BitbrokerLabs from '../../../assets/BitbrokerLabsProfile.png'
import Foxconn from '../../../assets/foxconn.png'
import GreenRiverImage from '../../../assets/GreenRiverImage.png'
import PLUImage from '../../../assets/PLUImage.jpeg'
function ExperiencePage() {
    const [state] = useState([
        {
            at: 'Foxconn Industrial Internet (FII-NA)',
            title: 'IT Manager',
            from: new Date("2026/02/01"),
            to: "Present",
            location: 'Houston, TX',
            image: Foxconn,
            desc: [
                'Promoted to Tech Lead / IT Manager overseeing 10+ engineers across 6 business units, owning resource allocation, project prioritization, and technical roadmap',
                'Define and enforce coding standards, conduct architectural reviews, and establish CI/CD pipelines and code review processes',
                'Evaluate and introduce new technologies including AI/LLM tooling and agentic development workflows, driving adoption of RAG and AI agents from proof-of-concept to production'
            ]
        },
        {
            at: 'Foxconn Industrial Internet (FII-NA)',
            title: 'Software Engineer',
            from: new Date("2021/03/29"),
            to: new Date("2026/02/01"),
            location: 'Houston, TX',
            image: Foxconn,
            desc: [
                'Designed and deployed an AI-powered Support Ticketing System with RAG-based knowledge retrieval using PostgreSQL pgvector and autonomous AI agents built with OpenAI Agent SDK',
                'Architected and delivered 15+ full-stack web applications using ASP.NET Core Web API, Next.js, React, and SQL Server, serving 1,000+ daily users across 6 business units',
                'Built real-time manufacturing floor monitoring systems using WebSockets and Socket.io, enabling live tracking across 200+ production stations',
                'Optimized SQL Server stored procedures and query execution plans, improving API response times for mission-critical production workflows',
                'Mentored L1/L2 engineers through structured onboarding, technical training, and hands-on code reviews'
            ]
        },
        {
            at: 'Bit Broker Labs',
            title: 'Full-Stack Software Engineer',
            from: new Date("2020/10/01"),
            to: new Date("2021/03/29"),
            location: 'Remote',
            image: BitbrokerLabs,
            desc: [
                'Engineered full-stack developer tools and web applications using React, GraphQL, MongoDB, and Express.js, accelerating product launch timelines for startup clients',
                'Designed and implemented RESTful APIs and GraphQL endpoints powering frontend applications with optimized data fetching and real-time updates'
            ]
        },
        {
            at: 'Pacific Lutheran University',
            title: 'Undergraduate Researcher (Protein Structure Prediction with AI)',
            from: new Date("2019/06/01"),
            to: new Date("2020/03/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: [
                'Developed a protein feature generator utilizing external tools from protein sequences and generated models',
                'Improved the prediction accuracy of the model by about 30% by adding more specific features derived from the feature generator'
            ]
        },
        {
            at: 'Pacific Lutheran University',
            title: 'Computer Science Teaching Assistant',
            from: new Date("2019/02/01"),
            to: new Date("2019/12/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: [
                'Taught programming languages and object-oriented programming concepts to students',
                'Debugged student code and advised on algorithms and techniques for problem-solving'
            ]
        },
        {
            at: 'Pacific Lutheran University',
            title: 'Undergraduate Researcher (AI & Smart Home Technologies)',
            from: new Date("2019/01/01"),
            to: new Date("2019/08/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: [
                'Developed an assessment model to evaluate smart home systems for residential energy efficiency in the Pacific Northwest',
                'Analyzed cost, privacy, cybersecurity, and technology risks using data analysis'
            ]
        },
        {
            at: 'GreenRiver College',
            title: 'Student Housing Assistant',
            from: new Date("2016/08/01"),
            to: new Date("2018/05/01"),
            location: 'Auburn, WA',
            image: GreenRiverImage,
            desc: [
                'Managed apartment setup and housing requirements for students',
                'Created orientation plans for school and public transportation familiarity'
            ]
        }
    ])
    return (
        <main className={classes.ExperiencePage}>
            <Experiences state={state}/>
        </main>
    )
}

export default ExperiencePage;

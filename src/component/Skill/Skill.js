import React, { useState, useEffect, useRef } from 'react'
import classes from './Skill.module.css'
import GraphqlIcon from '../../assets/svg/graphql.svg';
import Express from '../../assets/svg/express.svg';
import Node from '../../assets/svg/node.svg';
import Git from '../../assets/svg/github-tile.svg';
import Mongo from '../../assets/svg/mongodb-icon.svg';
import Postgres from '../../assets/svg/postgresql-icon.svg';
import Tailwind from '../../assets/svg/tailwindcss-icon.svg';
import MaterialUI from '../../assets/svg/materialui-icon.png';
import GoogleCloud from '../../assets/svg/google_cloud-icon.svg';
import AWS from '../../assets/svg/amazon_aws-icon.svg';
import Microservices from '../../assets/svg/microservices.jpeg';
import CSharp from '../../assets/svg/csharp.png';
import Typescript from '../../assets/svg/typescript.png';
import Sqlserver from '../../assets/svg/sqlserver.png';

const skills = [
    // --- Core Stack (daily use) ---
    {
        name: 'C# / ASP.NET Core',
        percent: '93%',
        svg: CSharp.src
    },
    {
        name: 'React / Next.js',
        percent: '92%',
        class: 'fab fa-react'
    },
    {
        name: 'TypeScript',
        percent: '90%',
        svg: Typescript.src
    },
    {
        name: 'JavaScript',
        percent: '92%',
        class: 'fab fa-node-js'
    },
    {
        name: 'SQL Server',
        percent: '90%',
        svg: Sqlserver.src
    },
    {
        name: 'Git / CI/CD',
        percent: '90%',
        svg: Git
    },
    // --- AI & LLM ---
    {
        name: 'RAG / Agentic AI',
        percent: '82%',
        svg: Microservices.src
    },
    {
        name: 'OpenAI Agent SDK / MCP',
        percent: '80%',
        svg: Microservices.src
    },
    {
        name: 'LangChain / LangGraph',
        percent: '75%',
        class: 'fab fa-python'
    },
    {
        name: 'Prompt Engineering',
        percent: '85%',
        svg: Microservices.src
    },
    {
        name: 'pgvector / Knowledge Graphs',
        percent: '75%',
        svg: Postgres
    },
    // --- Backend & Data ---
    {
        name: 'Node.js / Express',
        percent: '85%',
        svg: Node
    },
    {
        name: 'PostgreSQL',
        percent: '80%',
        svg: Postgres
    },
    {
        name: 'GraphQL',
        percent: '78%',
        svg: GraphqlIcon
    },
    {
        name: 'WebSockets / Socket.io',
        percent: '82%',
        svg: Express
    },
    {
        name: 'Microservices Architecture',
        percent: '78%',
        svg: Microservices.src
    },
    // --- Less familiar ---
    {
        name: 'Python',
        percent: '70%',
        class: 'fab fa-python'
    },
    {
        name: 'Docker / Kubernetes',
        percent: '72%',
        class: 'fab fa-docker'
    },
    {
        name: 'MongoDB',
        percent: '72%',
        svg: Mongo
    },
    {
        name: 'AWS',
        percent: '68%',
        svg: AWS
    },
    {
        name: 'Azure',
        percent: '65%',
        svg: GoogleCloud
    },
    {
        name: 'TailwindCSS / Material-UI',
        percent: '80%',
        svg: Tailwind
    }
]
function Skill() {
    const [animated, setAnimated] = useState(false)
    const [counts, setCounts] = useState(skills.map(() => 0))
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true)
                }
            },
            { threshold: 0.2 }
        )
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        return () => observer.disconnect()
    }, [animated])

    useEffect(() => {
        if (!animated) return
        const targets = skills.map(s => parseInt(s.percent))
        const duration = 1500
        const startTime = performance.now()

        const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCounts(targets.map(t => Math.round(t * eased)))
            if (progress < 1) {
                requestAnimationFrame(tick)
            }
        }
        requestAnimationFrame(tick)
    }, [animated])

    const skillArr = skills.map((skill, index) => {
        return (
            <div key={index} className={classes.skillData}>
                <div className={classes.skillNames}>
                    <i className={[skill.class, classes.skillIcon].join(' ')}></i>
                    {skill.svg && (
                        <img style={{width: '30px', marginLeft: '-12px', marginRight: '6px'}} src={skill.svg} alt=""/>
                    )}
                    <span className={classes.skillName}>{skill.name}</span>
                </div>
                <div>
                    <span className={classes.skillPercent}>{counts[index]}%</span>
                </div>
                <div
                    style={{
                        width: animated ? skill.percent : '0%',
                        transitionDelay: `${index * 80}ms`
                    }}
                    className={[classes.skillBars, animated ? classes.skillBarsAnimated : ''].join(' ')}
                >
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Skill} ref={containerRef}>
            <h2 className={classes.title}>Skills</h2>
            <div className={classes.skillContainer}>
                {skillArr}
            </div>
        </div>
    )
}

export default Skill

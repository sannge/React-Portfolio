import React,{useState} from 'react'
import Experiences from '../../../component/Experiences/Experiences'
import classes from './ExperiencePage.module.css'
import BitbrokerLabs from '../../../assets/BitbrokerLabsProfile.png'
import GreenRiverImage from '../../../assets/GreenRiverImage.png'
import PLUImage from '../../../assets/PLUImage.jpeg'
function ExperiencePage() {
    const [state] = useState([
        {
            at: 'Bitbroker Labs',
            title: 'Full-Stack Engineer',
            from: new Date("2020/10/01"),
            to: "Present",
            location: 'Remote',
            image: BitbrokerLabs,
            desc: ['Develop tools and websites that help startups to build better products minimum amount of effort and time','Implement and Engineer both Frontend features, Backend Servers, and APIs using ReactJS, GraphQl, MongoDb, Express and more.','Currently worked on Checkout Pages and Payment, Square and Stripe Integrations with OAuth, Ad-Attribution, Multi-language Support, and Profile Dashboard Systems']
        },{
            at: 'Pacific Lutheran University',
            title: 'Undergraduate Researcher(Protein Structure Prediction with AI)',
            from: new Date("2019/06/01"),
            to: new Date("2020/03/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: ['Developed a protein feature generator utilizing external tools from the protein sequences and generated models.','Improved the prediction accuracy of the model by about 30 percent by adding more speciﬁc features of protein derived from the feature generator.']
        },
        {
            at: 'Pacific Lutheran University',
            title: 'Computer Science Teaching Assistant',
            from: new Date("2019/02/01"),
            to: new Date("2019/12/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: ['Solved students’ ambiguities on the programming languages and object-oriented programming','Debugged multiple students’ codes/programs','Advised students with algorithms and techniques to tackle the problems and labs']
        },
        {
            at: 'Pacific Lutheran University',
            title: 'Undergraduate Researcher(AI and Smart Home Technologies for Promoting Energy Conservation)',
            from: new Date("2019/01/01"),
            to: new Date("2019/08/01"),
            location: 'Tacoma, WA',
            image: PLUImage,
            desc: ['Developed an assessment model to evaluate the innovation diffusion of smart home systems for residential energy efficiency and conservation in the Pacific Northwest.','Explored cost, unclear benefits, Privacy and trust, Cyber security, Complexity, and technology risks by using data analysis.']
        },
        {
            at: 'GreenRiver College',
            title: 'Student Housing Assistant',
            from: new Date("2016/08/01"),
            to: new Date("2018/05/01"),
            location: 'Auburn, WA',
            image: GreenRiverImage,
            desc: ['Managed to set up the apartments for the students to live in.','Fulfilled students, in the CCA, with their detail requirements for housing','Created plans for students to be comfortable and familiar with the school and public transportation system.']}
        
    ])
    return (
        <main className={classes.ExperiencePage}>
            <Experiences state={state}/>
        </main>
    )
}

export default ExperiencePage;

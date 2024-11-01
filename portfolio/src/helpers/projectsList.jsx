import { v4 as uuidv4 } from 'uuid';
import project01 from "./../image/projects/01.jpg"
import project01Big from "./../image/projects/01-big.jpg"
import project02 from "./../image/projects/02.jpg"
import project02Big from "./../image/projects/02-big.jpg"
import project04 from "./../image/projects/03.jpg"
import project04Big from "./../image/projects/03-big.jpg"
import project05 from "./../image/projects/04.jpg"
import project05Big from "./../image/projects/04-big.jpg"
import project06 from "./../image/projects/05.jpg"
import project06Big from "./../image/projects/05-big.jpg"
import project03 from "./../image/projects/06.jpg"
import project03Big from "./../image/projects/06-big.jpg"

const projects = [
    {
        id: uuidv4(),
        title: 'Gaming streaming portal',
        skills: 'React, Node.js, MongoDB',
        img: project01,
        imgBig: project01Big,
        gitHubLink: ''
    },
    {
        id: uuidv4(),
        title: 'Video service',
        skills: 'React, PHP, MySql',
        img: project02,
        imgBig: project02Big,
        gitHubLink: ''
    },
    {
        id: uuidv4(),
        title: 'Video service',
        skills: 'Vue JS, Node.js, MongoDB',
        img: project03,
        imgBig: project03Big,
        gitHubLink: ''
    },
    {
        id: uuidv4(),
        title: 'Video service',
        skills: 'React Native',
        img: project04,
        imgBig: project04Big,
        gitHubLink: ''
    },
    {
        id: uuidv4(),
        title: 'Video service',
        skills: 'HTML, SCSS, JS',
        img: project05,
        imgBig: project05Big,
        gitHubLink: ''
    },
    {
        id: uuidv4(),
        title: 'Video service',
        skills: 'React, PHP, MySql',
        img: project06,
        imgBig: project06Big,
        gitHubLink: ''
    }
];

export {projects}
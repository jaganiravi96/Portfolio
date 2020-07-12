import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/jaganiravi96/Portfolio',
        image: project1
    },
    {
        id: 2,
        title: 'Ping game',
        description: 'Dice rolling game, making use of DOM and javascript basics to create an interactive game',
        link: 'https://github.com/jaganiravi96/Pig_Game',
        image: project2
    },
    {
        id: 3,
        title: 'Image processing',
        description: 'Web Page which can convert the image by reading RGB color value',
        link: 'https://github.com/jaganiravi96/Image_Processing_with_Multithreading',
        image: project3
    }
];

export default PROJECTS;
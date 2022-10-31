/* works as a api */
import pizzaImg from "../assets/pizza.png";
import social from "../assets/social.png";
import videogamePi from '../assets/videogamePi.png'


const ProjectCardData = [
    {
        imgsrc: pizzaImg,
        title: "Ecommerce Pizza Delivery",
        text: "Description",
        view: "https://delivery-app-mu.vercel.app/",
        source: "https://github.com/AgusCorcico/deliveryApp"
    },
    {
        imgsrc: social,
        title: "Social media app",
        text: "Description",
        view: "https://github.com/AgusCorcico/mern-social-app",
        source: "https://github.com/AgusCorcico/mern-social-app"
    },
    {
        imgsrc: videogamePi,
        title: "Videogames PI",
        text: "Description",
        view: "https://agus-videogames-app.vercel.app/",
        source: "https://github.com/AgusCorcico/PI-Videogames"
    },
]

export default ProjectCardData;
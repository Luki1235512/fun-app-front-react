import '../../App.css'
import Hero from "./Hero";
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import Slider from "./Slider";
import Navbar from "./Navbar";

const master = "https://fun-app-19ltju.herokuapp.com"
const local = "http://localhost:3000"

const navbarLinks = [
    {url: "#", title: "Home"},
    {url: {local} + "/employees", title: "SPRING"},
    {url: "#", title: "THREE.JS"},
]

function LandingPageComponent() {
    return <div>
        <Navbar navbarLinks={navbarLinks}/>
        <Hero imageSrc={image1} />
        <Slider imageSrc={image2} title={"Lorem title"} subtitle={"Lorem subtitle"}/>
        <Slider imageSrc={image3} title={"Lorem title 2"} subtitle={"Lorem subtitle 2"} flipped={true}/>
    </div>
}

export default LandingPageComponent

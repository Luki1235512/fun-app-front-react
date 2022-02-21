import Hero from "./Hero";
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import Slider from "./Slider";


function LandingPageComponent() {
    return <div>
        <Hero imageSrc={image1} />
        <Slider imageSrc={image2} title={"Lorem title"} subtitle={"Lorem subtitle"}/>
        <Slider imageSrc={image3} title={"Lorem title 2"} subtitle={"Lorem subtitle 2"} flipped={true}/>
    </div>
}

export default LandingPageComponent

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Parking from "../assets/parking.jpg"
import Destination from "../components/Destination.jsx"
import Footer from "../components/Footer.jsx"

function Home () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                ccName="hero-text1"
                heroImg = {Parking}
                title="LotView"
                text="Autonomous Parking Lot Monitoring System"
                buttonText=""
                url=""
                btnClass="hide"
            />
            <Destination/>
            <Footer/>
        </>
    )
}

export default Home;
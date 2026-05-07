import Nabvar from "../../components/layout/Navbar.jsx";
import Hero from "./Hero.jsx";
import Awards from "./Awards.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
import Education from "./Education.jsx";
import OpenAccount from "../../components/layout/OpenAccount.jsx";
import Footer from "../../components/layout/Footer.jsx";

export default function HomePage() {
    return (
        <>
            <Nabvar></Nabvar>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
            <Footer></Footer>
        </>
    )
}
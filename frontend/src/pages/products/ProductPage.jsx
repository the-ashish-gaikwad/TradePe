import Footer from "../../components/layout/Footer.jsx";
import Nabvar from "../../components/layout/Navbar.jsx";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.js";

export default function ProductPage() {
    return (
        <>
            <Nabvar></Nabvar>
            <Hero></Hero>
            <RightSection></RightSection>
            <LeftSection></LeftSection>
            <Universe></Universe>
            <Footer></Footer>
        </>
    );
}
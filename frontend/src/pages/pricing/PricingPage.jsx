import Footer from "../../components/layout/Footer.jsx";
import Nabvar from "../../components/layout/Navbar.jsx";
import Brokerage from "./Brokerage.jsx";
import Hero from "./Hero.jsx";

export default function PricingPage() {
    return (
        <>
            <Nabvar></Nabvar>
            <Hero></Hero>
            <Brokerage></Brokerage>
            <Footer></Footer>
        </>
    );
}
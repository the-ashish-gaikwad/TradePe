import Footer from "../../components/layout/Footer.jsx";
import Nabvar from "../../components/layout/Navbar.jsx";
import CreateTicket from "./CreateTicket.jsx";
import Hero from "./Hero.jsx";

export default function SupportPage() {
    return (
        <>
            <Nabvar></Nabvar>
            <Hero></Hero>
            <CreateTicket></CreateTicket>
            <Footer></Footer>
        </>
    );
}
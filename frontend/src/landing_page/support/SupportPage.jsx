import Footer from "../Footer";
import Nabvar from "../Navbar";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

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
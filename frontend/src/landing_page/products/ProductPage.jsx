import Footer from "../Footer";
import Nabvar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

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
import "./Home.css"
import logoLead from "../assets/logoLEAD.svg";
import LogoLiderancasEmpaticas from "../assets/logoLE.svg"
import Menu from "../assets/Menu.svg"
function Home() {
    return (
        <>
            <header>
                <div>
                    <img src={logoLead} alt="" />
                    <img src={LogoLiderancasEmpaticas} alt="" />
                </div>

                <div>
                    <img src={Menu} alt="" />
                    <img src="" alt="" />
                </div>
            </header>

        </>

    );
}

export default Home
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { VscDebugRestart } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
const NavBar = () => {

    const navOptions = <>
        <a><Link to="/">Help</Link></a>
        <a><Link to="/">Shotcuts</Link></a>
        <a><Link to="/"><VscDebugRestart className="text-lg"/></Link></a>
    </>
    return (
        <>
            <div className="navbar hidden md:flex text-black bg-slate-100 border-b-2 shadow-sm text-sm">
                <div className="navbar-start flex gap-2">

                    <a className="normal-case"><SiMinutemailer className="text-lg text-orange-600 inline-block" /> Comapany</a>
                    {navOptions}

                </div>
                <div className="navbar-center flex justify-center items-center">

                    <p className="inline-block">Customer support: <BsTelephone className="text-lg inline-block "></BsTelephone> <span className="text-blue-600">(+19) 1234 333 333</span></p> 
                    <div className="divider-horizontal p-0">|</div> 
                    <p> <IoLogoWhatsapp className="inline-block text-green-600 text-lg"></IoLogoWhatsapp> <span className="text-blue-600">(+19) 1234 333 333</span></p>

                </div>
                <div className="navbar-end flex gap-3">
                    <a className="hoverbg text-lg">-</a>
                    <a className="hoverbg text-lg"><HiOutlineDocumentDuplicate /></a>
                    <a className="hoverbg text-lg">X</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
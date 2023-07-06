import { BsFillPlusCircleFill, BsHandbag, BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSettings, IoStatsChart, IoStorefrontSharp } from "react-icons/io5";
import InnerContent from "./InnerContent";
import { AiFillBank, AiFillHome, AiOutlineRight } from "react-icons/ai";
import Option from "./Option";
import { FaCartPlus, FaPlus, FaRegNoteSticky, FaUsers, FaWallet } from "react-icons/fa6";
import { } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
const Dashboard = () => {

    const navItems = <>
        <Option text='Home' icon={AiFillHome}></Option>
        <Option text='Parties' icon={FaUsers} icon2={FaPlus}></Option>

        {/* accordions------------------ */}
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow hover:bg-teal-700">
                <input type="radio" name="my-accordion-4" className="p-0" />
                <div className="collapse-title p-0">
                    <Option text='Sale' icon={FaRegNoteSticky}></Option>
                </div>
                <div className="collapse-content">
                    <Option text='option 1' icon2={FaPlus}></Option>
                    <Option text='option 2' icon2={FaPlus}></Option>
                </div>
            </div>
            <div className="collapse collapse-arrow hover:bg-teal-700">
                <input type="radio" name="my-accordion-4" className="p-0" />
                <div className="collapse-title p-0">
                    <Option text='Purchase' icon={FaCartPlus}></Option>
                </div>
                <div className="collapse-content">
                    <Option text='option 1' icon2={FaPlus}></Option>
                    <Option text='option 2' icon2={FaPlus}></Option>
                </div>
            </div>
        </div>

        <Option text='Expences' icon={FaWallet}></Option>
        {/* accordion open------------------ */}
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow hover:bg-teal-700">
                <input type="radio" name="my-accordion-4" checked="checked " className="p-0" />
                <div className="collapse-title p-0">
                    <Option text='Cash & Bank' icon={AiFillBank}></Option>
                </div>
                <div className="collapse-content">
                    <Option text='Bank Account' icon2={FaPlus}></Option>
                    <Option text='Cash in hand' icon2={FaPlus}></Option>
                    <Option text='Checks' icon2={FaPlus}></Option>
                    <Option text='Loan Accounts' icon2={FaPlus}></Option>
                </div>
            </div>
        </div>

        <Option text='My online store' icon={IoStorefrontSharp}></Option>
        <Option text='My report' icon={IoStatsChart}></Option>
        <div className="w-full h-[2px] bg-slate-500/50 my-2 drop-shadow-sm"></div>
        <div className="flex items-center">
            <Option text='Apply for loan' icon={BsHandbag}></Option>
            <div className="indicator-item badge bg-red-600 text-white">New</div>
        </div>
    </>
    return (
        <div className="drawer lg:drawer-open" >
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar flex-col md:flex-row md:flex-wrap gap-2  min-h-max">
                    {/* 3 bar icon for small device---------- */}
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    {/* search field------------------ */}
                    <div className="left flex-1 px-2 mx-2">
                        <label className="input-group rounded ">
                            <span className='bg-white'><BiSearchAlt ></BiSearchAlt></span>
                            <input type="text" placeholder="Search Transactions" className="input w-full md:w-auto" />
                        </label>

                    </div>
                    {/* buttons----------------------- */}
                    <div className="right flex gap-2 lg:gap4 flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
                        <button className="btn rounded-full bg-red-100 normal-case text-lg text-red-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add Sale
                        </button>
                        <button className="btn rounded-full bg-blue-100 normal-case text-lg text-blue-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add Puchase
                        </button>
                        <button className="btn rounded-full normal-case text-lg text-blue-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add More
                        </button>
                        <div className="px-2 hidden md:visible">|</div>
                        <div className="flex gap-3">
                            <div className="indicator">
                                <div className="indicator-item badge bg-red-500 h-2 w-2 p-0 m-0"></div>
                                <BsWhatsapp className="text-xl text-green-500"></BsWhatsapp>
                            </div>
                            <div className="indicator">
                                <div className="indicator-item badge bg-red-500 h-2 w-2 p-0 m-0"></div>
                                <IoSettings className="text-xl text-slate-600"></IoSettings>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page content here --------------------------*/}
                <InnerContent />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 bg-teal-950 text-white">
                    <div className="flex gap-2 items-center">
                        <button className="btn btn-circle bg-blue-500">
                            <img src="home.png" alt="" />
                            <div className="indicator-item badge bg-white h-3 w-3 relative left-5 bottom-4"><p>+</p></div>
                        </button>
                        <p className="text-xl font-bold truncate ...">Machinary and Parts</p>

                        <AiOutlineRight className='block text-xl'></AiOutlineRight>
                    </div>

                    <div className="bg-green-900 rounded m-3 flex p-2">
                        <button className="btn btn-sm btn-circle btn-ghost text-xl"><IoLogoWhatsapp className="text-green-500"></IoLogoWhatsapp></button>
                        <div>
                            <h3 className="font-semibold text-lg text-green-500">Your personal messenger!</h3>
                            <p className="py-4">Intregate whatsapp to automate transaction messaging.</p>
                        </div>
                        <button type="submit" className="btn btn-sm btn-circle btn-ghost">✕</button>

                    </div>
                    <div className="text-slate-200 font-medium">
                        {navItems}
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Dashboard;
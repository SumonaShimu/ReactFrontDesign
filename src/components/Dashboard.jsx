import { BsFillPlusCircleFill, BsSearch, BsWhatsapp } from "react-icons/bs";
import { } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import InnerContent from "./InnerContent";
const Dashboard = () => {
    const navItems = <>
        <li><a>Navbar Item 1</a></li>
        <li><a>Navbar Item 2</a></li>
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="left flex-1 px-2 mx-2">
                        <BsSearch/>
                        <input type="text" placeholder="Search Transactions" className="input w-full md:w-auto" />
                    </div>
                    <div className="right flex gap-2 flex-wrap lg:flex-nowrap">
                        <button className="btn rounded-full bg-red-100 normal-case text-lg text-red-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add Sale
                        </button>
                        <button className="btn rounded-full bg-blue-100 normal-case text-lg text-blue-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add Puchase
                        </button>
                        <button className="btn rounded-full normal-case text-lg text-blue-600">
                            <BsFillPlusCircleFill className=""></BsFillPlusCircleFill> Add More
                        </button>
                        <div className="px-2">|</div>
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
                {/* Page content here */}
                <InnerContent/>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-950 text-white">
                    {navItems}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
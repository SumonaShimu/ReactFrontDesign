import { FaMessage, FaSquarePhone, FaWhatsapp } from 'react-icons/fa6';
import { AiOutlineArrowDown, AiOutlineDown, AiOutlineEdit, AiOutlineMail, AiOutlineRight } from "react-icons/ai";
import { BsArrowUp, BsCurrencyRupee, BsPlus, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { BiAlarm, BiFilterAlt, BiSearchAlt } from "react-icons/bi";


const InnerContent = () => {
    return (
        <div className="w-full h-full bg-slate-200 overflow-auto">
            <h1 className="bg-slate-100 py-2 border-slate-300 text-center drop-shadow-lg">NAME</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-3 w-full min-h-max lg:h-full p-3 ">
                {/* div left------------------------------------------------ */}
                <div className="lg:col-start-1 lg:row-span-3 bg-white h-full w-full shadow-md drop-shadow-lg p-2">
                    <div className="flex gap-3 items-center p-4 border rounded-lg ">
                        <div className='bg-red-100 rounded-full flex items-center p-2'>
                            <FaSquarePhone className='text-red-500 text-lg block'></FaSquarePhone>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold'>Import Parties</h4>
                            <p>Use contacts from your phone or Gmail to create parties.</p>
                        </div>
                        <AiOutlineRight className='text-5xl text-blue-600'></AiOutlineRight>
                    </div>

                    <div className='flex justify-between items-center p-2'>

                        <button className="btn btn-circle">
                            <BsSearch />
                        </button>
                        <div className='btn bg-amber-500 text-white overflow-hidden hover:text-black'>
                            <BsPlus />
                            Add Party
                            <div className='h-full px-4 bg-amber-950/25 flex items-center me-[-20px] rounded-tr rounded-br '><AiOutlineDown className='text-xl font-bold'></AiOutlineDown></div>
                        </div>
                    </div>

                    <div className="max-w-full lg:w-full overflow-x-hidden">
                        <table className="table lg:w-full">
                            {/* head */}
                            <thead className='uppercase text-base'>
                                <tr>
                                    <th className='border-r flex items-center justify-between'>
                                        <BsArrowUp />
                                        Party
                                        <BiFilterAlt className='text-red-600 ms-5'></BiFilterAlt>
                                    </th>
                                    <th>amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='bg-slate-100'>
                                {/* row 1 */}
                                <tr className=''>

                                    <td>KPS Shanhuala</td>
                                    <td className='text-green-500'>2,360.00</td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* div right up ---------------------------------------------------*/}
                <div className="lg:col-start-2 lg:col-span-3 bg-white h-full shadow-md drop-shadow-lg p-2">
                    <div className='heading flex flex-col md:flex-row justify-between'>
                        <h3 className='text-xl font-medium'>KPS Shanhuala</h3>
                        <h3 className='flex gap-2'>
                            <FaMessage className='text-amber-500 text-lg'></FaMessage>
                            <FaWhatsapp className='text-green-600 text-lg'></FaWhatsapp>
                            <BiAlarm className='text-slate-600 text-lg'></BiAlarm>
                        </h3>
                    </div>
                    <div className='flex flex-wrap justify-between mt-5'>
                        <div className='info '>
                            <h6>Phone: 12345695656</h6>
                            <h6 className='flex flex-wrap'>Email: <span className='flex items-center gap-2 text-blue-500'><AiOutlineMail /> Add email id</span></h6>
                            <h6 className='flex flex-wrap'>No Credit Linot Set: <span className='flex items-center gap-2 text-blue-500'><BsCurrencyRupee /> Set credit Limit</span></h6>
                        </div>
                        <div className='info text-right'>
                            <h6>Address: Sanhuala</h6>
                            <h6 className='flex flex-wrap'>Gstin: <span className='flex items-center gap-2 text-blue-500'><AiOutlineEdit /> Add GSTIN</span></h6>

                        </div>
                    </div>

                </div>
                {/* div right down--------------------------------------------- */}
                <div className="lg:col-start-2 lg:col-span-3 lg:row-span-2 bg-white h-full w-full shadow-md drop-shadow-lg p-2 overflow-x-scroll">
                    <div className='heading flex flex-col md:flex-row justify-between'>
                        <h3 className='text-xl font-medium'>Transactions</h3>
                        <label className="input-group border rounded max-w-2/3 md:w-1/3">
                            <span className='bg-white'><BiSearchAlt ></BiSearchAlt></span>
                            <input type="text" placeholder="" className="input w-full" />
                        </label>

                    </div>
                    <table className="table text-sm mt-5 w-full">
                        {/* head */}
                        <thead className='uppercase text-base'>
                            <tr className=''>
                                <th className='border-r '></th>

                                <th className='border-r'>
                                    Type
                                    <BiFilterAlt className='ms-5 inline'></BiFilterAlt>
                                </th>
                                <th className='border-r'>
                                    Number
                                    <BiFilterAlt className='ms-5 inline'></BiFilterAlt>
                                </th>
                                <th className='border-r'>
                                    <AiOutlineArrowDown className='me-2 inline'></AiOutlineArrowDown>
                                    Date
                                    <BiFilterAlt className='ms-5 inline'></BiFilterAlt>
                                </th>
                                <th className='border-r'>
                                    total
                                    <BiFilterAlt className='ms-5 inline'></BiFilterAlt>
                                </th>
                                <th className=''>
                                    Balance
                                    <BiFilterAlt className='ms-5 inline'></BiFilterAlt>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {/* row 1 */}
                            <tr className='bg-slate-100'>
                                <td className='border-r '>
                                    <div className="indicator-item badge bg-green-500 h-2 w-2 p-0 m-0"></div>
                                </td>
                                <td className='border-r'>
                                    Sale
                                </td>
                                <td className='text-right border-r'>
                                    1
                                </td>
                                <td className='border-r'>
                                    30/6/23
                                </td>
                                <td className='border-r text-right'>
                                    2,360.00
                                </td>
                                <td className='border-r text-right'>
                                    2,360.00
                                </td>
                                <td>
                                    <BsThreeDotsVertical />
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className=''>
                                <td className='border-r '>
                                    <div className="indicator-item badge bg-green-500 h-2 w-2 p-0 m-0"></div>
                                </td>
                                <td className='border-r'>
                                    Sale
                                </td>
                                <td className='text-right border-r'>
                                    1
                                </td>
                                <td className='border-r'>
                                    30/6/23
                                </td>
                                <td className='border-r text-right'>
                                    814.00
                                </td>
                                <td className='border-r text-right'>
                                    814.00
                                </td>
                                <td>
                                    <BsThreeDotsVertical />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InnerContent;
import { FaSquarePhone } from 'react-icons/fa6';
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { BsArrowUp, BsPlus, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { BiFilterAlt } from "react-icons/bi";
import { TbHomePlus } from "react-icons/tb";

const InnerContent = () => {
    return (
        <div className="w-full h-full bg-slate-200 overflow-auto">
            <h1 className="bg-slate-100 py-2 border-slate-300 text-center drop-shadow-lg">NAME</h1>
            <div className="p-3 grid lg:grid-cols-4 lg:grid-rows-3 gap-3 w-full h-full">
                {/* div left */}
                <div className="col-start-1 row-span-3 bg-white h-full shadow-md drop-shadow-lg p-2">
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

                    <div className="overflow-x-scroll overflow-y-scroll lg:overflow-hidden">
                        <table className="table">
                            {/* head */}
                            <thead className='uppercase text-base'>
                                <tr>
                                    <th className='flex items-center justify-between'>
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
                                    <td className='text-green-500'>23600.00</td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* div right up */}
                <div className="col-start-2 col-span-3 bg-white h-full shadow-md drop-shadow-lg">
                <div>
                ---------------------------------
                </div>
                </div>
                {/* div right down */}
                <div className="col-start-2 col-span-3 row-span-2 bg-white h-full shadow-md drop-shadow-lg ">kkkk</div>
            </div>
        </div>
    );
};

export default InnerContent;
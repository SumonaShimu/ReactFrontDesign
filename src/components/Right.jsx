import { Data } from "../../public/data";

const Right = () => {
    const alldata = Data;
    const initial = alldata[2];
    return (
        <div className='rightDiv min-h-[50%]'>
            Item CARD
            <div id='content' className="border w-full h-full p-10">
                <h1>{initial.Name}</h1>
                Price: Rs. {initial.Price}
                <h1>Item Id: {initial.id}</h1>
            </div>
        </div>
    );
};

export default Right;
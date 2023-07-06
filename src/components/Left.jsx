import { Data } from "../../public/data";
import { changeInnerText } from "../../public/funtions";


const Left = () => {
    const alldata = Data;
    alldata.map(singleData => console.log(singleData.Name)) //line
    return (
        <ul className="leftDiv ">
            List of items 
            {alldata.map(singleData => {
                return (
                    <li key={singleData.id} className="border">
                        <button onClick={()=>changeInnerText(singleData)}>{singleData.Name}</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Left;

const InnerContent = () => {
    return (
        <div className="w-full h-full bg-slate-200 overflow-auto">
            <h1 className="bg-slate-100 py-2 border-slate-300 text-center drop-shadow-lg">NAME</h1>
            <div className="p-3 grid lg:grid-cols-4 lg:grid-rows-3 gap-3 w-full h-full">
                {/* div left */}
            <div className="col-start-1 row-span-3 bg-white h-full shadow-md drop-shadow-lg">kkkk</div>
            {/* div right 1 */}
            <div className="col-start-2 col-span-3 bg-white h-full shadow-md drop-shadow-lg">kkkk</div>
            {/* div right 2 */}
            <div className="col-start-2 col-span-3 row-span-2 bg-white h-full shadow-md drop-shadow-lg ">kkkk</div>
            </div>
        </div>
    );
};

export default InnerContent;
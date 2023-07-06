const Option = ({text,icon:Icon1,icon2:Icon2}) => {
    return (
        <div className="flex justify-between items-center text-slate-200 font-medium text-lg mt-2 hover:bg-teal-700 px-3">
            <div className='flex gap-2 items-center flex-1'>
            {Icon1 ? <Icon1 className='w-5'></Icon1> : <p> </p>}
            <h3>{text}</h3>
            </div>
            <h1 className='text-right'>{Icon2 && <Icon2 className="flex-1 text-end w-3"></Icon2>}</h1>
        </div>
    );
};

export default Option;
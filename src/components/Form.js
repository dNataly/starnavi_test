import React, {useState} from 'react';


const PickModeForm = (props) => {
    const {setMode, data, setIsHover} = props;
    const [value, setValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsHover([]);
        data.map(item => {
            if (item.name === value) {
                setMode(item.field);
                localStorage.setItem("mode", item.field)
            }
        })
    }


    return (
    <form className="flex items-center gap-5 mb-5">
        <select className="border-2 border-gray-700 outline-none p-1" onChange={e => setValue(e.target.value)}>
            <option value="" className="selected disabled hidden">Pick mode</option>
            {
                data &&
                data.map(data => (
                    <option value={data.name} key={data.id} className="p-2 w-10">{data.name}</option>
                ))
            }
        </select>
        <input type="submit" value="START" className="bg-[#0275d8] pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-initialColor font-bold rounded cursor-pointer" onClick={handleSubmit}/>
    </form>
);
}

export default PickModeForm;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Corset = () => {
    const [corsets, setCorsets] = useState([]);

    useEffect(() => {
        getCorsets()
    }, []);

    async function getCorsets() {
        try {
            const res = await axios.get('http://localhost:4000/corsets');
            setCorsets(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="w-full min-h-[65vh] bg-[#F7F3E3] flex justify-center items-start">
            <div className="w-[90%] min-h-[65vh]  bg-[#F7F3E3] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px] ">
                {corsets.map(({ id, name, img, price }, i) => (
                    <Link to={`${id}`} key={`${id}-${i}`} className="w-[300px] h-[410px] ">
                        <div className="w-full h-[410px] bg-[#4D1E10]  rounded-[10px]">
                            <img
                                src={img}
                                alt={name || 'image'}
                                className="w-full h-[350px] object-cover  rounded-[10px]"
                            />
                            <p className="flex gap-[5px] flex-col pl-[10px] text-[#F7F3E3] font-[Anchora]">
                                <span>{name}</span>
                                <span>{price}</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Corset;

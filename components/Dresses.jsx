import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const Dresses = () => {
    const [dresses, setDresses] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [valuePrice1 , setValuePrice1] = useState("");
    const [valuePrice2 , setValuePrice2] = useState('');
    const minPrice = +searchParams.get("price1") || 1000;
    const maxPrice = +searchParams.get("price2") || 10000000;

    useEffect(() => {
        getDresses();
    }, []);

    async function getDresses() {
        try {
            const res = await axios.get("http://localhost:4000/dresses");
            setDresses(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="w-full bg-[#F7F3E3] flex flex-col items-center">
            <div className="w-[90%] mt-[90px] text-[#4D1E10] flex justify-start items-center border-b-2 border-[#4D1E10] pb-2">
                <div className="w-[40%] flex items-start justify-start">
                    <p className="font-[Anchora] text-[35px]">Dresses</p>
                </div>
                <div className="w-[60%] flex flex-col items-end justify-end mr-[20px] gap-[5px]">
                    <p className="font-[Anchora] text-[20px]">SORT BY PRICE</p>
                    <input
                        type="number"
                        placeholder="From"
                        value={valuePrice1}
                        onChange={(e) => {
                            setValuePrice1(e.target.value)


                        }}
                        className="h-[30px] bg-[#4D1E10] rounded-[10px] border-none px-2 w-[200px] text-white"
                    />
                    <input
                        type="number"
                        placeholder="To"
                        value={valuePrice2}

                        onChange={(e) => {
                            setValuePrice2(e.target.value)

                        }}
                        className="h-[30px] bg-[#4D1E10] rounded-[10px] border-none px-2 text-white w-[200px]"
                    />

                    <div className="flex gap-[10px] ">
                        <button
                            onClick={() => {
                                searchParams.set("price1", valuePrice1);
                                setSearchParams(searchParams);
                                searchParams.set("price2", valuePrice2);
                                setSearchParams(searchParams);
                                setValuePrice1('')
                                setValuePrice2('')

                            }}

                            className="bg-[#4D1E10] w-[120px] text-[#F7F3E3]  rounded-[10px] border-none p-2 hover:cursor-pointer hover:bg-[#6F1A07]"
                        >
                            CONFIRM
                        </button>
                        <button
                            onClick={() => {
                                searchParams.delete("price1");
                                searchParams.delete("price2");
                                setSearchParams(searchParams);
                            }}

                            className="bg-[#4D1E10] w-[70px] text-[#F7F3E3]  rounded-[10px] border-none p-2 hover:cursor-pointer  hover:bg-[#6F1A07] "
                        >
                            ALL
                        </button>
                    </div>


                </div>
            </div>

            <div className="w-[90%] grid grid-cols-4 gap-[40px] bg-[#F7F3E3] min-h-screen my-[50px]">
                {dresses.map(({ id, name, img, price }, i) => {
                    return +price >= minPrice && +price <= maxPrice && (
                        <Link to={`${id}`} key={`${id}-${i}`} className="w-[300px] h-[410px]">
                            <div className="w-full h-full bg-[#4D1E10]  rounded-[10px]">
                                <img
                                    src={img}
                                    alt={name || "image"}
                                    loading="lazy"
                                    className="w-full h-[350px] object-cover rounded-[10px]"
                                />
                                <p className="flex flex-col pl-2 gap-[1px] font-[Anchora] text-[#F7F3E3] text-[17px]">
                                    <span>{name}</span>
                                    <span>{price} AMD</span>
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Dresses;

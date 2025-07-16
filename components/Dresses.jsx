import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDresses, filterByPrice, clearFilter } from "../redux/slices/dressesSlice";
import { Link, useSearchParams } from "react-router-dom";

const Dresses = () => {
    const dispatch = useDispatch();
    const { filtered, loading } = useSelector(state => state.dresses || {});

    const [searchParams, setSearchParams] = useSearchParams();
    const [valuePrice1, setValuePrice1] = useState("");
    const [valuePrice2, setValuePrice2] = useState("");

    useEffect(() => {
        dispatch(fetchDresses());
    }, [dispatch]);

    useEffect(() => {
        const minPrice = +searchParams.get("price1") || 1000;
        const maxPrice = +searchParams.get("price2") || 10000000;
        dispatch(filterByPrice({ min: minPrice, max: maxPrice }));
    }, [searchParams, dispatch]);

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
                        onChange={(e) => setValuePrice1(e.target.value)}
                        className="h-[30px] bg-[#4D1E10] rounded-[10px] border-none px-2 w-[200px] text-white"
                    />
                    <input
                        type="number"
                        placeholder="To"
                        value={valuePrice2}
                        onChange={(e) => setValuePrice2(e.target.value)}
                        className="h-[30px] bg-[#4D1E10] rounded-[10px] border-none px-2 text-white w-[200px]"
                    />
                    <div className="flex gap-[10px]">
                        <button
                            onClick={() => {
                                if (valuePrice1) searchParams.set("price1", valuePrice1);
                                if (valuePrice2) searchParams.set("price2", valuePrice2);
                                setSearchParams(searchParams);
                                setValuePrice1('');
                                setValuePrice2('');
                            }}
                            className="bg-[#4D1E10] w-[120px] text-[#F7F3E3] rounded-[10px] border-none p-2 hover:bg-[#6F1A07]"
                        >
                            CONFIRM
                        </button>
                        <button
                            onClick={() => {
                                searchParams.delete("price1");
                                searchParams.delete("price2");
                                setSearchParams(searchParams);
                                dispatch(clearFilter());
                            }}
                            className="bg-[#4D1E10] w-[70px] text-[#F7F3E3] rounded-[10px] border-none p-2 hover:bg-[#6F1A07]"
                        >
                            ALL
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[90%] grid grid-cols-4 gap-[40px] bg-[#F7F3E3] min-h-screen my-[50px]">
                {loading ? (
                    <div role="status">
                        <svg aria-hidden="true"
                             className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    Array.isArray(filtered) && filtered.length > 0 ? (
                        filtered.map(({id, name, img, price}, i) => (
                            <Link to={`${id}`} key={`${id}-${i}`} className="w-[300px] h-[410px]">
                                <div className="w-full h-full bg-[#4D1E10] rounded-[10px]">
                                    <img
                                        src={img}
                                        alt={name || "image"}
                                        // loading="lazy"
                                        className="w-full h-[350px] object-cover rounded-[10px]"
                                    />
                                    <p className="flex flex-col pl-2 gap-[1px] font-[Anchora] text-[#F7F3E3] text-[17px]">
                                        <span>{name}</span>
                                        <span>{price} AMD</span>
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-[20px] text-[#4D1E10]">No dresses found.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Dresses;

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDresses, filterByPrice, clearFilter as clearDressFilter } from "../Redux/Slices/dressesSlice.js";
import { fetchCorsets, filterPrice, clearFilter as clearCorsetFilter } from "../Redux/Slices/corsetSlice.js";
import {  setMinPrice, setMaxPrice, clearPrices } from "../Redux/Slices/searchSlice.js";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const {  filtered: filteredDresses, loading: loadingDresses } = useSelector((state) => state.dresses);
    const {  filtered: filteredCorsets, loading: loadingCorsets } = useSelector((state) => state.corsets);
    const { search, minPrice, maxPrice } = useSelector((state) => state.search);
    const [showInputs, setShowInputs] = useState(false);

    useEffect(() => {
        dispatch(fetchDresses());
        dispatch(fetchCorsets());
    }, [dispatch]);

    useEffect(() => {
        const min = searchParams.get("min");
        const max = searchParams.get("max");

        if (min && max) {
            dispatch(setMinPrice(min));
            dispatch(setMaxPrice(max));
            dispatch(filterByPrice({ min, max }));
            dispatch(filterPrice({ min, max }));
        } else {
            dispatch(clearPrices());
            dispatch(clearDressFilter());
            dispatch(clearCorsetFilter());
        }
    }, [searchParams, dispatch]);

    const handleApply = () => {
        const params = {};
        if (minPrice) params.min = minPrice;
        if (maxPrice) params.max = maxPrice;
        setSearchParams(params);
    };

    const handleClear = () => {
        dispatch(clearPrices());
        setSearchParams({});
    };

    const results = useMemo(() => {
        const term = search.trim().toLowerCase();
        const combined = [...filteredDresses, ...filteredCorsets];
        if (!term) return combined;
        return combined.filter((item) =>
            ["name", "category", "description"].some((key) =>
                item[key]?.toLowerCase().includes(term)
            )
        );
    }, [search, filteredDresses, filteredCorsets]);

    return (
        <div className="w-full min-h-[65vh] flex items-center flex-col gap-[30px] justify-center bg-[#F7F3E3] py-10">
            <p className="mt-[30px]">
                <span className="text-[28px] font-[Anchora] text-[#4D1E10]">Step into vintage elegance</span>
            </p>
            <div className="w-[90%] flex flex-col items-start gap-4">
                <button onClick={() => setShowInputs(!showInputs)} className="w-[300px] rounded-[10px] bg-[#4D1E10] text-[#F7F3E3] h-[50px] hover:opacity-[0.6] cursor-pointer">
                    Organize by Price
                </button>
                {showInputs && (
                    <div className="flex gap-3">
                        <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => dispatch(setMinPrice(e.target.value))} className="border p-2 rounded" />
                        <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => dispatch(setMaxPrice(e.target.value))} className="border p-2 rounded" />
                        <button onClick={handleApply} className="bg-green-600 text-white px-4 rounded hover:opacity-70">Apply</button>
                        <button onClick={handleClear} className="bg-red-600 text-white px-4 rounded hover:opacity-70">Clear</button>
                    </div>
                )}
            </div>
            <div className="w-[90%] max-w-[1400px] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {loadingDresses || loadingCorsets ? (
                    <span>Loading...</span>
                ) : results.length === 0 ? (
                    <span>No results</span>
                ) : (
                    results.map((item, i) => (
                        <Link to={`/${item.type}/${item.id}`} key={i} className="bg-[#4D1E10] flex flex-col items-start w-[300px] rounded shadow h-[410px] rounded-[10px] mb-[30px]">
                            <img src={item.img} alt={item.name} className="w-full h-[350px] object-cover mb-3 rounded-[10px]" />
                            <p className="flex flex-col pl-[5px] gap-[1px] font-[Anchora] text-[#F7F3E3] text-[17px]">
                                <span>{item.name}</span>
                                <span>{item.price} AMD</span>
                            </p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Search;

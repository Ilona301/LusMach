import React, {useEffect} from 'react';
import { useSearch } from "../providers/searchContext.jsx";
import { Link } from "react-router-dom";


const Search = () => {
    const { results, loading, search, setSearch } = useSearch();


    useEffect(() => {
        if (search === "") {
            setSearch("");
        }
    }, [search, setSearch]);
    return (

        <div className="w-full min-h-[65vh] flex items-center flex-col gap-[70px] justify-center bg-[#F7F3E3] py-10">
            <p className="mt-[30px]">
                <span className="text-[28px] font-[Anchora] text-[#4D1E10]">Step into vintage elegance</span>
            </p>
            <div className="w-[90%] ">
                <button className="w-[300px] rounded-[10px] bg-[#4D1E10] text-[#F7F3E3] h-[50px] hover:opacity-[0.6] cursor-pointer">Organize by Price</button>

            </div>
            <div className="w-[90%] max-w-[1400px] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {loading ? (
                    <span>Loading...</span>
                ) : results.length === 0 ? (
                    <span>No results</span>
                ) : (
                    results.map((result, index) => (
                        <Link
                            to={`/${result.type}/${result.id}`}
                            key={index}
                            className="bg-[#4D1E10] flex flex-col items-start w-[300px] rounded shadow h-[400px] rounded-[10px] mb-[30px]"
                        >
                            <img
                                src={result.img}
                                alt={result.name}
                                loading="lazy"
                                className="w-full h-[350px] object-cover mb-3 rounded-[10px]"
                            />
                            <p className="flex flex-col pl-[5px] gap-[1px]  font-[Anchora] text-[#F7F3E3] text-[17px]">
                                <span>{result.name}</span>
                                <span>{result.price} AMD</span>
                            </p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Search;

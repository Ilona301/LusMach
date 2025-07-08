import React from 'react';
import { Link } from "react-router-dom";

const Section = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center relative bg-[#F7F3E3] dark:bg-[#4D1E10]">
            <img className="w-full h-screen object-cover" src="/img/header2.jpeg" alt="girl" />
            <div className="w-full h-[60vh] flex justify-center items-center">
                <div className="w-[90%] flex justify-around items-center">
                    <Link to="/corset" className="relative w-[250px] h-[300px] rounded-[10px] flex items-center justify-center transition-all duration-1000 ease-in-out group">
                        <span className="absolute z-20 text-[18px] font-[Anchora] text-[#C03232] opacity-0 group-hover:opacity-100 pointer-events-none">CORSETS</span>
                        <img
                            src="/img/corset.jpeg"
                            alt="corset"
                            className="w-[250px] h-[300px] object-cover rounded-[10px] absolute transition-all duration-1000 ease-in-out group-hover:opacity-20 group-hover:border group-hover:border-[#C03232]"
                        />
                    </Link>
                    <Link to="/dresses" className="relative w-[250px] h-[300px] rounded-[10px] flex items-center justify-center transition-all duration-1000 ease-in-out group">
                        <span className="absolute z-20 text-[18px] font-[Anchora] text-[#C03232] opacity-0 group-hover:opacity-100 pointer-events-none">DRESSES</span>
                        <img
                            src="/img/dress.jpg"
                            alt="dress"
                            className="w-[250px] h-[300px] object-cover rounded-[10px] absolute transition-all duration-1000 ease-in-out group-hover:opacity-20 group-hover:border group-hover:border-[#C03232]"
                        />
                    </Link>
                    <Link to="/under" className="relative w-[250px] h-[300px] rounded-[10px] flex items-center justify-center transition-all duration-1000 ease-in-out group">
                        <span className="absolute z-20 text-[18px] font-[Anchora] text-[#C03232] opacity-0 group-hover:opacity-100 pointer-events-none">UNDERWEAR</span>
                        <img
                            src="/img/under.jpeg"
                            alt="under"
                            className="w-[250px] h-[300px] object-cover rounded-[10px] absolute transition-all duration-1000 ease-in-out group-hover:opacity-20 group-hover:border group-hover:border-[#C03232]"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Section;

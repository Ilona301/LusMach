import React, {useEffect} from 'react';
const Footer = () => {

    return (
        <footer className="w-full h-[24vh] bg-[#4D1E10] flex justify-start items-start text-[#F7F3E3] px-4">
            <div className="flex items-center justify-center w-[40%] h-full">
                <p className="font-[Anchora] text-[22px]">LUSINE MACHKALIAN</p>
            </div>
            <div className="flex flex-col justify-center items-start w-[60%] h-full gap-[15px]">
                <div className="flex gap-[15px]">
                    <a href="https://www.instagram.com/lusinemachkalianv?igsh=eWg4dm9kb2F6ZnM=">
                        <i className="bi bi-instagram text-[#F7F3E3] text-[25px] hover:cursor-pointer"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-facebook text-[#F7F3E3] text-[25px] hover:cursor-pointer"></i>
                    </a>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                    <div className="flex items-center gap-[10px]">
                        <i className="bi bi-telephone text-[20px]"></i>
                        <p className="font-[Anchora]">+374 77 350450</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <i className="bi bi-envelope-heart text-[20px]"></i>
                        <p className="text-[17px] font-[Anchora]">LusineMachkalian@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const DressesPage = () => {
    const {id}=useParams()
    const [dresses, setDresses] = useState([]);
    useEffect(() => {
        getDresses()
    },[])

    async function getDresses() {
        try{
            const res =  await axios.get(`http://localhost:4000/dresses?id=${id}`)
            setDresses(res.data[0])
        }catch(error){
            console.log(error.message)
        }

    }
    return (
        <div className="bg-[#F7F3E3] min-h-[65vh]">
            <div className=" w-full flex  items-start justify-center ">
                <div  className="w-[90%] flex items-center justify-center gap-[20px]  p-[10px] rounded-[15px]"
                      style={{ backgroundColor: 'rgba(59, 53, 43, 0.8)' }}
                >
                    <div className="w-[40%] flex items-center justify-center ">
                        <img src={dresses.img} loading="lazy" alt={dresses.name || 'image'} className="w-[400px] h-[600px] object-cover rounded-[10px]"/>
                    </div>


                    <div className="w-[50%] flex items-start justify-center flex-col gap-[10px] h-[400px] ">
                        <span className="text-[30px] text-[#F7F3E3]">{dresses.name}</span>
                        <span className="text-[18px] text-[#F7F3E3]">{dresses.price} AMD</span>
                        <span className="text-[15px] text-[#F7F3E3]" >{dresses.description}</span>
                        <div className="flex gap-[10px] items-center justify-center ">
                            {dresses.sizes?.map((item, index) => (
                                <button
                                    key={index}
                                    className={`text-[18px] text-[#3B352B] bg-[#F7F3E3]  rounded-[5px]  w-[50px] h-[35px] hover:cursor-pointer ${item.count === 0 ? 'line-through opacity-50' : ''}`}

                                >
                                    {item.size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DressesPage;
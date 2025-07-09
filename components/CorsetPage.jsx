import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


const CorsetPage = () => {
    const {id}=useParams()
    const [corsets, setCorsets] = useState([]);
    console.log(corsets)
    useEffect(() => {
        getCorsets()
        console.log('corset')
    },[])

    async function getCorsets() {
        try{
            const res =  await axios.get(`http://localhost:4000/corsets?id=${id}`)
            setCorsets(res.data[0])
        }catch(error){
            console.log(error.message)
        }

    }
    return (
        <div className="bg-[#F7F3E3]  min-h-[65vh]">
            <div className=" w-full flex  items-start justify-center ">

                <div  className="w-[90%] flex items-center justify-center gap-[20px]  p-[10px] rounded-[15px] mb-[30px]"
                      style={{ backgroundColor: 'rgba(59, 53, 43, 0.8)' }}>

                    <div className="w-[40%] flex items-center justify-center ">
                        <img src={corsets.img} loading="lazy" alt={corsets.name || 'image'} className="w-[400px] h-[600px] object-cover rounded-[10px]"/>
                    </div>


                    <div className="w-[50%] flex items-start justify-center flex-col gap-[10px] h-[400px] ">
                        <span className="text-[30px] text-[#F7F3E3]">{corsets.name}</span>
                        <span className="text-[18px] text-[#F7F3E3]">{corsets.price} AMD</span>
                        <span className="text-[15px] text-[#F7F3E3]" >{corsets.description}</span>
                        <div className="flex gap-[10px] items-center justify-center mt-4">
                            {corsets.sizes?.map((item, index) => (
                                <button
                                    key={index}
                                    className={`text-[18px] text-[#3B352B] bg-[#F7F3E3] px-3 py-1 rounded-[5px]  w-[50px] h-[35px] hover:cursor-pointer ${item.count === 0 ? 'line-through opacity-50' : ''}`}

                                >
                                    {item.size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/*style={{color:'black',fontSize:"35px",textDecoration:count?'none':'line-through'}}*/}
            </div>
        </div>

    );
};

export default CorsetPage;
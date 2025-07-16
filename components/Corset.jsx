import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorsets } from '../Redux/Slices/corsetSlice.js';
import { Link } from 'react-router-dom';

const Corset = () => {
    const dispatch = useDispatch();

    const { corsets, loading, error } = useSelector(state => state.corsets || {});

    useEffect(() => {
        dispatch(fetchCorsets());
    }, [dispatch]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <div className="w-full min-h-[65vh] bg-[#F7F3E3] flex justify-center items-start">
            <div className="w-[90%] min-h-[65vh] bg-[#F7F3E3] grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px]">
                {corsets.map(({ id, name, img, price }, i) => (
                    <Link to={`${id}`} key={`${id}-${i}`} className="w-[300px] h-[410px]">
                        <div className="w-full h-[410px] bg-[#4D1E10] rounded-[10px]">
                            <img
                                src={img}
                                alt={name || 'image'}
                                loading="lazy"
                                className="w-full h-[350px] object-cover rounded-[10px]"
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

import React from 'react';
import Image from 'next/image';

const Lake = ({ lake, index }) => {
    return (
        <div className="lake-wrapper">
            <h2 className="text-center font-semibold text-3xl my-6 p-4 border-solid border-4 border-fuchsia-500/80">{index + 1}. {lake.name}</h2>
            <div className="image-container flex justify-center shadow-xl max-w-max mx-auto">
                <Image 
                    src={lake.imgUrl}
                    alt={lake.name}
                    width={900}
                    height={500}
                    objectFit="cover"
                    className="image"
                />
            </div>
            <p className="mt-5 mb-8 text-xl text-justify">{lake.desc}</p>
        </div>
    )
}

export default Lake;

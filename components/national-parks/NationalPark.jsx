import React from 'react';
import Image from 'next/image';

const NationalPark = ({ park, index }) => {
    return (
        <div className="lake-wrapper">
            <h2 className="text-center font-semibold text-3xl my-6 p-4 border-solid border-4 border-green-400">{index + 1}. {park.name}</h2>
            <div className="image-container flex justify-center shadow-xl max-w-max mx-auto">
                <Image 
                    src={park.imgUrl}
                    alt={park.name}
                    width={900}
                    height={500}
                    objectFit="cover"
                    className="image"
                />
            </div>
            <p className="mt-5 mb-8 text-xl text-justify">{park.desc}</p>
        </div>
    )
}

export default NationalPark;

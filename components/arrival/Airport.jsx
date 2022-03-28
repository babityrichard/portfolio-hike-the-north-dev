import React from 'react';
import Image from 'next/image';
import millify from 'millify';

const Airport = ({ airport, index }) => {
    return (
        <div className={`airport-wrapper mx-4 mt-5 flex flex-col lg:flex-row border-b-2 border-rose-200 py-5 last:mb-20 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
            <div className={`left-content flex flex-1 justify-center flex-col space-y-7 ${index % 2 === 0 ? '' : 'lg:pl-16'}`}>
                <h3 className="text-center lg:text-left text-4xl italic underline decoration-green-400 underline-offset-2">{airport.name}</h3>
                <h4 className="text-center lg:text-left text-3xl font-medium">Location: {airport.location}</h4>
                <h4 className="text-center lg:text-left text-2xl">Iata Code: {airport.code}</h4>
                <h5 className="text-center lg:text-left text-2xl">Total Passengers (2019): {millify(airport.passPerYear, { precision: 2})}</h5>
                <a href={airport.siteUrl} target="_blank" rel="noreferrer" className="text-center lg:text-left"><button className="btn rounded-lg md:rounded-full w-2/3 text-2xl font-semibold tracking-wide bg-fuchsia-600 shadow-lg shadow-fuchsia-600/50 text-white py-3 px-6 mb-10 lg:mb-0">Visit Site</button></a>
            </div>
            <div className="right-content flex flex-1">
                <div className="image-container mx-auto">
                    <Image 
                        src={airport.imgUrl}
                        alt={airport.name}
                        width={600}
                        height={400}
                        objectFit="cover"
                        className="rounded-3xl"
                    />
                </div>    
            </div>            
        </div>
    )
}

export default Airport;

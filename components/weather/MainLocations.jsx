import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainLocations } from '../../data/mainLocations';

const MainLocations = () => {
    return (
        <div className="mainlocations-wrapper w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center mt-12">
                {mainLocations.length > 0 && mainLocations.map((location, index) => (
                    <div className="locations-box text-center" key={index}>
                        <Link href={location.url}>
                            <a>
                                <div className="locations-image-wrapper overflow-hidden max-w-max mx-auto drop-shadow-lg">
                                    <Image 
                                        src={location.image}
                                        alt={`${location.name} Image`}
                                        width={300}
                                        height={200}
                                        objectFit="cover"
                                        className="locationImage rounded-xl"
                                    />
                                </div>

                                <span className="font-semibold">{location.name}</span>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainLocations;

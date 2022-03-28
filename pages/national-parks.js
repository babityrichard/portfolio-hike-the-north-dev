import React from 'react'
import NationalPark from '../components/national-parks/NationalPark';
import { ParksData } from '../data/national_parks';

const Parks = () => {
    return (
        <div className="bg-[url('/assets/img/national_parks/national_parks_bg.jpg')] w-full h-min-content bg-fixed bg-cover bg-center flex justify-center">
            <div className="w-[90%] h-full backdrop-blur-sm bg-white/95 mx-[2%]">
                <main className="my-[3%] mx-[10%]">
                    <section>
                        <h1 className="text-center text-4xl font-semibold tracking-wide mt-[35%] md:mt-[19%] lg:mt-[8%] mb-5 underline decoration-purple-600 underline-offset-2">National Parks</h1>
                        <p className="mb-2 text-xl text-justify">Canada is arguably the world’s premier destination for nature lovers and outdoor enthusiasts, boasting an extensive national park system that’s virtually unsurpassed in terms of its <span className="underline decoration-fuchsia-500 underline-offset-2">sheer size, beauty and diversity</span>. Whether you’re in search of soaring mountain peaks, verdant forests, glistening glacial lakes or stunning coastal scenery, you’ll be met with expansive stretches of pristine nature, an intoxicating raw wilderness feel and endless opportunities for active adventures.</p> 
                        <p className="mb-2 text-xl text-justify">What’s more, you’re very likely be able to enjoy all of this without the crowds found in similar spots south of the border. Here is a roundup of our favourite national parks.</p>
                    </section>

                    <section>
                        {ParksData.map((park, index) => (
                            <NationalPark 
                                key={park.id} 
                                park={park} 
                                index={index} 
                            />
                        ))}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Parks;

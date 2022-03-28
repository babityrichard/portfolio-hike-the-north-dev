import React from 'react'
import MainLocations from '../../components/weather/MainLocations';
import SearchBox from '../../components/weather/SearchBox';

const Weather = () => {
    return (
        <div className=" bg-[url('/assets/img/weather/weather_bg.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center">
            <div className="w-[90%] backdrop-blur-sm bg-white/95 mx-[2%]">
                <div className="container w-[80%] m-auto">
                    <h1 className="text-center text-4xl font-semibold tracking-wide mt-[35%] md:mt-[19%] lg:mt-[7%] mb-5 underline decoration-purple-600 underline-offset-2">Weather</h1>

                    <SearchBox placeholder="Search for a location..." />

                    <MainLocations />
                </div>
            </div>
        </div>
    )
}

export default Weather;

import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

const TodaysWeather = ({ city, weather, timezone }) => {
    const tempMax = weather.temp.max.toFixed(0);
    const tempMin = weather.temp.min.toFixed(0);
    const tempMaxFahr = Math.ceil(weather.temp.max.toFixed(0) * 9 / 5) + 32;
    const tempMinFahr = Math.ceil(weather.temp.min.toFixed(0) * 9 / 5) + 32;

    return (
        <div className="today text-white bg-sky-600 rounded-lg w-3/5 mx-auto mt-7 md:mt-0">
            
            <div className="lg:flex flex-col md:flex-row items-center p-8">
                <div className="left-content flex-1 text-center">
                    <h1 className="text-4xl mb-4">{city.name}</h1>

                    <h2 className="text-2xl mb-4 space-x-6">
                        <span>{tempMax} &deg;C / {tempMaxFahr} &deg;F </span> 
                        <span>{tempMin} &deg;C / {tempMinFahr} &deg;F</span>
                    </h2>

                    <div className="sun-times flex justify-center space-x-8">
                        <div>
                            <span className="text-xl block">Sunrise</span>
                            <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                        </div>
                        <div>
                            <span className="text-xl block">Sunset</span>
                            <span>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                        </div>
                    </div>
                </div>

                <div className="right-content flex-1 text-center">
                    <div className="today__icon-wrapper w-28 h-28 overflow-hidden relative mx-auto">
                        <div>
                            <Image 
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                                layout="fill"
                            />
                        </div>
                    </div>
                    <h3 className="pb-3">
                        {weather.weather[0].description}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default TodaysWeather;

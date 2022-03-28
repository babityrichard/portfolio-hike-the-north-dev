import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

const WeeklyWeather = ({ weeklyWeather, timezone }) => {   
    return (
        <div className="weekly w-3/5 mx-auto mt-7">
            <h3 className="weekly__title text-4xl font-medium text-center mb-4">
                Weekly <span className="font-normal">Weather</span>
            </h3>

            {weeklyWeather.length > 0 && weeklyWeather.map((weather, i) => {
                const tempMax = weather.temp.max.toFixed(0);
                const tempMin = weather.temp.min.toFixed(0);
                const tempMaxFahr = Math.ceil(weather.temp.max.toFixed(0) * 9 / 5) + 32;
                const tempMinFahr = Math.ceil(weather.temp.min.toFixed(0) * 9 / 5) + 32;

                if (i === 0) {
                    return;
                }

                return (
                    <div 
                        key={weather.dt}
                        className="weekly__card rounded-xl text-white bg-teal-500 mb-4" 
                    >
                        <div className="weekly__inner flex flex-col md:flex-row text-center py-3">
                            <div className="weekly__left-content flex flex-1 justify-center items-center">
                                <div className="p-6">
                                    <h3 className="text-3xl mb-3">
                                        {moment.unix(weather.dt).tz(timezone).format("dddd")}
                                    </h3>

                                    <h4 className="text-lg flex flex-row md:block">
                                        <span className="mr-3 font-semibold">{tempMax} &deg;C / {tempMaxFahr} &deg;F </span>
                                        <span>{tempMin} &deg;C / {tempMinFahr} &deg;F</span>
                                    </h4>
                                </div>
                            </div>
                            
                            <div className="weekly__middle flex justify-center md:items-center">
                                <div className="weekly__sun-times flex justify-center items-center space-x-5">
                                    <div>
                                        <span className="font-semibold block text-xl">Sunrise</span>
                                        <span>
                                            {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                                        </span>
                                    </div>

                                    <div>
                                        <span className="font-semibold block text-xl">Sunset</span>
                                        <span>
                                            {moment.unix(weather.sunset).tz(timezone).format("LT")}
                                        </span>
                                    </div>
                                </div>
                            </div>                            

                            <div className="weekly__right-content flex-1 text-center py-3">
                                <div className="weekly__icon-wrapper ">
                                    <div className="w-20 h-20 mx-auto">
                                        <Image 
                                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                            alt={weather.weather[0].description}
                                            width={70}
                                            height={70}
                                            layout="responsive"                         
                                        />                                        
                                    </div>
                                </div>
                                <h5>{weather.weather[0].description}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default WeeklyWeather;

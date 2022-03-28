import React from 'react';
import moment from 'moment-timezone';
import Image from 'next/image';

const HourlyWeather = ({ hourlyWeather, timezone }) => {
    return (
        <div className="hourly w-3/5 mx-auto overflow-auto mt-5">
            <div className="hourly__inner flex scrollbar scrollbar-track-gray-100 scrollbar-thumb-slate-300">
                {hourlyWeather.length > 0 && hourlyWeather.map((weather, i) => (
                    <div key={weather.dt}
                        className="hourly__box-wrapper grow-1 shrink min-w-[120px] px-3 mb-8 first:min-w-[110px] first:pl-0 last:min-w-[110px] last:pr-0" 
                    >
                        <div className="hourly__box text-center rounded-md text-white bg-violet-600 p-2">
                            <span className="hourly__time">
                                {i === 0 
                                    ? "Now" 
                                    : moment.unix(weather.dt).tz(timezone).format("LT")
                                }
                            </span>

                            <Image 
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                                width={100}
                                height={100}
                                className="w-full"
                            />

                            <span>{weather.temp.toFixed(0)} &deg;C</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyWeather;

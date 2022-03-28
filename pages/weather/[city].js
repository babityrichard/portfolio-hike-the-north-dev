import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import cities from '../../data/city_list.json';
import SearchBox from '../../components/weather/SearchBox';
import TodaysWeather from '../../components/weather/TodaysWeather';
import HourlyWeather from '../../components/weather/HourlyWeather';
import WeeklyWeather from '../../components/weather/WeeklyWeather';
import moment from 'moment-timezone';

export async function getServerSideProps(ctx) {
    const city = getCity(ctx.params.city);

    if (!city) {
        return {
            notFound: true
        }
    }

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
    );

    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            city: city,
            timezone: data.timezone,
            currentWeather: data.current,
            dailyWeather: data.daily,
            hourlyWeather: getHourlyWeather(data.hourly, data.timezone)
        }        
    }
} 

const getCity = param => {
    const cityParam = param.trim();
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];

    if (!id) {
        return null;
    }

    const city = cities.find(city => city.id.toString() === id);

    if (city) {
        return city;
    } else {
        return null;
    }
}

const getHourlyWeather = (hourlyData, timezone) => {
    const endOfDay = moment().tz(timezone).endOf('day').valueOf();
    const endTimestamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter(data => data.dt < endTimestamp);

    return todaysData;
}

const City = ({ city, timezone, hourlyWeather, dailyWeather }) => {
    return (
        <div>
            <Head>
                <title>{city.name} Weather</title>
            </Head>

            <div className="page-wrapper">
                <div className="container mx-auto mt-4">                    
                    <div className="w-3/5 mx-auto md:flex md:flex-row items-center md:space-x-10">
                        <div className="flex-1">
                            <SearchBox placeholder="Search for another location..." />
                        </div>
                        <div className="mt-6 md:mt-3 text-center ">
                            <Link href="/weather">
                                <a className="btn text-center text-lg text-white bg-orange-400 py-3 px-16 md:px-12 rounded-xl">Go Back</a>
                            </Link>
                        </div>
                        
                    </div>
                    <TodaysWeather 
                        city={city} 
                        timezone={timezone}
                        weather={dailyWeather[0]} 
                    />
                    <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
                    <WeeklyWeather weeklyWeather={dailyWeather} timezone={timezone} />
                </div>
            </div>

        </div>
    )
}

export default City;

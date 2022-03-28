import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import cities from '../../data/city_list.json';

const SearchBox = ({ placeholder }) => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const clearSearch = () => setQuery("");

        Router.events.on("routeChangeComplete", clearSearch);

        return () => Router.events.off("routeChangeComplete", clearSearch);
    }, [])

    const onChange = e => {
        const searchedCity = e.target.value;
        setQuery(searchedCity);

        let matchingCities = [];

        if (searchedCity.length > 2) {
            for(let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }

                const match = city.name.toLowerCase().startsWith(searchedCity.toLowerCase());

                if (match) {
                    const cityData = {
                        ...city,
                        slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`
                    }

                    matchingCities.push(cityData);
                }
            }
        }
        
        return setResults(matchingCities);
    }

    return (
        <div className="relative mt-6 mb-3">
            <input 
                type="text" 
                value={query} 
                onChange={onChange} placeholder={placeholder ? placeholder : ""} 
                className="w-full h-fit border-2 rounded-lg !outline-none p-3"
            />

            {query.length > 2 && (
                <ul className="absolute w-full px-3 m-0 border-2 rounded-lg shadow-lg bg-white z-10">
                    {results.length > 0 ? (
                        results.map(city => (
                            <li key={city.id} className="border-b py-4 hover:bg-cyan-500 hover:font-semibold hover:text-white last:border-b-0">
                                <Link href={`${router.pathname.includes('weather/') ? `${city.slug}` : `weather/${city.slug}`}`}>
                                    <a className="align-middle px-1">
                                        {city.name}
                                    </a>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className="py-4">No results found</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default SearchBox;

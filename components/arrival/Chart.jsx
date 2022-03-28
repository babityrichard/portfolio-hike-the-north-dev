import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { ArrivalsData } from '../../data/arrivalsChart';

const Chart = () => {
    const [touristData, setTouristData] = useState({
        labels: ArrivalsData.map(data => data.year),
        datasets: [{
            label: "Tourist arrivals per year",
            data: ArrivalsData.map(data => data.arrivals),
            backgroundColor: [
                "#ec4899",
                "#2dd4bf",
                "#c026d3",
                "#f3ba2f",
                "#2a71d0",
            ]
        }]
    })
    return (
        <section className="w-2/3 mx-auto hidden md:block">
            <h2 className="text-center font-semibold text-3xl my-5">Growing Popularity</h2>            
            <Bar data={touristData} />
        </section>
    )
}

export default Chart;

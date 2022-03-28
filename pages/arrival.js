import React from 'react';
import Chart from '../components/arrival/Chart';
import Airport from '../components/arrival/Airport';
import { AirportsData } from '../data/airports';

const Arrival = () => {
    return (
        <div 
            className="bg-fixed bg-cover bg-center w-full h-min-content flex justify-center"
            style={{backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/assets/img/arrival/arrival_bg.jpg')"}}
        >
            <div className="relative w-[90%] h-full backdrop-blur-sm bg-white/95 mx-[2%]">

                <main className="my-[3%] mx-[10%]">
                    <section>
                        <h1 className="text-center text-4xl font-semibold tracking-wide mt-[35%] md:mt-[19%] lg:mt-[8%] mb-5 underline decoration-purple-600 underline-offset-2">Arrival</h1>
                        <p className="my-3 text-xl text-justify">Welcome to <span className="font-medium">Canada</span>! Each year more and more people visit this beautiful country. You can easily be one of them! See the details below upon visa and useful informations of arrival.</p>

                        <Chart />
                    </section>

                    <section>
                        <h2 className="text-center font-semibold text-3xl mt-6">Visa</h2>
                        <p className="m-4 text-xl text-justify">Electronic Travel Authorization, i.e. eTA, enables tourists from many different countries to visit and admire the beauty of Canada since March 2016. It takes up to 15 minutes to fill in the application form online and register an online payment. To do that you would need a credit or debit card, or try using other methods of payment available on the <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/before-apply-eta.html" target="_blank" rel="noreferrer" className="text-purple-600">website of eTA Canada</a>.</p>
                        <p className="m-4 text-xl text-justify">If you love nature, and dreamed of seeing the beauties of the untouched vast lands, eTA Canada is a suitable option for you. If you wish to travel to Canada by plane and get to know this multicultural country, do not hesitate and apply online.</p>
                    </section>

                    <section>
                        <h2 className="text-center font-semibold text-3xl mt-6">Main Airports</h2>
                        <p className="m-5 text-xl text-justify">There are several ways to enter Canada, the most obvious is by plane naturally. Many modern airports await tourists from all over the world, and manage a big load of traffic. Here you can see the biggest and most popular ones.</p>

                        {AirportsData.map((airport, index) => (
                            <Airport 
                                key={airport.id} 
                                airport={airport} 
                                index={index} 
                            />
                        ))}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Arrival;

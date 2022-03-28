import React from 'react'
import Lake from '../components/lakes/Lake';
import { LakesData } from '../data/lakes';

const Lakes = () => {
    return (
        <div className="bg-[url('/assets/img/lakes/lakes_bg.jpg')] w-full h-min-content bg-fixed bg-cover bg-center flex justify-center">
            <div className="w-[90%] h-full backdrop-blur-sm bg-white/95 mx-[2%]">
                <main className="my-[3%] mx-[10%]">
                    <section>
                        <h1 className="text-center text-4xl font-semibold tracking-wide mt-[35%] md:mt-[19%] lg:mt-[8%] mb-5 underline decoration-purple-600 underline-offset-2">Lakes</h1>
                        <p className="mb-2 text-xl text-justify">The second largest country in the world, Canada is known for its natural beauty and outdoor activities. It’s home to eight distinct forest regions, two mountain regions, volcanoes and the arctic zone. It also happens to be have the <span className="underline decoration-green-400 underline-offset-2">world’s largest amount of fresh water</span> lakes, which are spread across all ten provinces and three territories.</p>
                        
                        <p className="mb-2 text-xl text-justify">It’s believed that there are over 2 million lakes in Canada, 31,752 of which are larger than three square kilometres, with 561 of these lakes having a surface area larger than 100 square kilometres. In fact, over nine per cent of the country is covered by freshwater. That’s over 890,000 square kilometres! With so many lakes, it’s nearly impossible to decide which lakes are the best. You&apos;ll see that some lakes are much more spectacular than the others.</p>
                    </section>

                    <section>
                        {LakesData.map((lake, index) => (
                            <Lake 
                                key={lake.id} 
                                lake={lake} 
                                index={index} 
                            />
                        ))}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Lakes;

import React from 'react'

import Hero from '../Section/Hero'
import Feature from '../Section/Feature'
import Highlight from '../Section/Highlight'
import Pitch from '../Section/Pitch'
import Work from '../Section/Work'
import Global from '../Section/Global'
import Recents from '../Section/Recents'
import Subscription from '../Section/Subscription'
const Home = () => {
    return (
        <>

            <Hero/>

          
            <Feature/>

            <Highlight/>

            <Pitch/>


            <Work/>

            

           <Global/>
            
        

            <Recents/>


            <Subscription/>


            <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
                <div class="pointer-events-auto flex items-center justify-between gap-x-6 bg-ai-agent sm:rounded-xs p-0.5">
                    <div class="px-12 py-2.5 sm:py-3 bg-blackAlpha-600 rounded-xs">
                        <p class="text-sm leading-6 text-white"><a
                            href="/ai?utm_source=website&amp;utm_medium=banner&amp;utm_campaign=annoucement&amp;utm_id=annoucement"><strong
                                class="font-semibold">NEWS</strong><svg viewBox="0 0 2 2"
                                    class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                <circle cx="1" cy="1" r="1"></circle>
                            </svg>Explore Multi AI Agent Contract by Phala Network <span aria-hidden="true">→</span></a></p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home

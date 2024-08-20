import React from 'react'
import glob from '../assets/video/worldmap20230708.mp4'


const Global = () => {
  return (
   <>
   <section className='section-global-distribution'>

<div className='safe-viewport !px-0 grid gap-8 xl:gap-16 grid-cols-1 xl:grid-cols-12 border border-solid border-black-100 rounded-md'>

    <div className='row-start-1 col-span-full z-10 flex flex-col items-center gap-12 my-8 2xl:my-16'>
        <header className='text-center'>
            <h3 className=' text-56 text-black-800 font-black'>
                DePIN with the most TEE nodes
            </h3>
            <h4 className='text-32 text-black-600'>
                By the people, for the people
            </h4>
        </header>

        <div className='bg-phalaPurple text-white w-96 p-4 rounded-full'>
            <div className='flex flex-row gap-6 sm:gap-12 justify-around w-full'>

                <div className='stats flex flex-col items-center'>
                    <h4 className='text-24 font-bold'>
                        0
                    </h4>
                    <div>
                        Computer
                    </div>
                </div>

                <div className='stats flex flex-col items-center'>
                    <h4 className='text-24 font-bold'>
                        0
                    </h4>
                    <div>
                        $PHA
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-5'>

            <div className='inline-flex items-center gap-2.5'>

                <i className='w-4 h-4 inline-block rounded-full bg-[#cdfa50]'></i>
                <span className=' text-18'>Phala
                    Blockchain Nodes</span>
            </div>

            <div className="inline-flex items-center gap-2.5"><i
                className="w-4 h-4 inline-block rounded-full bg-[#8544F6]"></i><span
                    className="text-18">Off-chain Computers</span>
            </div>
        </div>
    </div>
    <div className='row-start-1 col-span-full z-0 overflow-hidden rounded-md'>
        <video loop autoPlay muted className="object-cover aspect-[3840/1980] h-full min-w-full">
            <source src={glob} />
        </video>
    </div>
</div>
</section>
   </>
  )
}

export default Global

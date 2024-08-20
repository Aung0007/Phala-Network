import React from 'react'
import heroOn from '../assets/icons/hero-online-worker.png'
import bgnetwork from '../assets/video/bg20230718.mp4'
import ethereum from '../assets/home/Ethereum.png'


const Hero = () => {
  return (
    <>
      <section className='section-hero w-full max-w-[1760px] mx-auto lg:px-9 xl:px-10 3xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-6'>

<div className='row-start-1 col-span-full lg:pt-28'>

    <div className='h-screen lg:h-auto lg:rounded overflow-hidden aspect-[1312/756] w-full relative'>

        <div className='absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden'>
            <video className=' object-cover h-full min-w-full rounded-sm' muted autoPlay loop>
                <source src={bgnetwork} />
            </video>
        </div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-16 text-center'>
            <header className=' flex flex-col gap-4'>
                <h2 className=' text-3xl lg:text-[6vw] font-extrabold bg-black-800 text-transparent bg-clip-text bg-no-repeat blurpng' >
                    AI Coprocessor
                </h2>

                <h3 className=' text-lg  lg:text-[2vw] font-normal text-black-800'>
                    for Blockchains
                </h3>
            </header>
            <div className=' flex flex-col lg:flex-row gap-2.5 lg:gap-5 mx-auto'>
                <a href="" className=' bg-[#CDFA50] px-3 py-2 rounded-full font-bold hover:bg-[#DAFB7C] justify-center min-w-[160px] '>
                    Learn More
                </a>
            </div>
        </div>
    </div>
</div>

<div className=' row-start-2 lg:row-start-1 col-span-full flex flex-col-reverse pr-20 pl-14 mt-10 lg:mt-0'>

    <div className='flex flex-col gap-10 lg:flex-row justify-between pb-8 text-black-800'>

        <div className='lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-8 lg:gap-14 items-start rounded-xl'>

            <div className='flex flex-col items-center lg:items-start lg:flex-row gap-4 h-full m-auto'>

                <div className=' drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center'>
                    <img className='pointer-events-none' src={heroOn} alt="" />
                </div>

                <div className='text-center lg:text-left'>

                    <strong className='stats-text-shadow text-md font-bold'>
                        0
                    </strong>

                    <div className='stats-text-shadow text-sm font-medium -tracking-tight'>
                        Online Workers
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center lg:items-start lg:flex-row gap-4 h-full m-auto'>

                <div className=' drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center'>
                    <img className='pointer-events-none' src={heroOn} alt="" />
                </div>

                <div className='text-center lg:text-left'>

                    <strong className='stats-text-shadow text-md font-bold'>
                        0
                    </strong>

                    <div className='stats-text-shadow text-sm font-medium -tracking-tight'>
                        Online Workers
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:col-start-3 lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-14 items-start rounded-xl'>

            <div className='flex flex-col items-center lg:items-start lg:flex-row gap-4 h-full m-auto'>

                <div className='drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center'>
                    <img src={heroOn} className='pointer-events-none' alt="" />
                </div>
                <div className=' text-center lg:text-left'>
                    <strong className='stats-text-shadow text-md font-bold'>0</strong>
                    <div className=' stats-text-shadow text-sm font-medium -tracking-tight'>

                        Cross-Chain TX
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center lg:items-start lg:flex-row gap-4 h-full m-auto'>

                <div className='drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center'>
                    <img src={heroOn} className='pointer-events-none' alt="" />
                </div>
                <div className=' text-center lg:text-left'>
                    <strong className='stats-text-shadow text-md font-bold'>0</strong>
                    <div className=' stats-text-shadow text-sm font-medium -tracking-tight'>

                        Cross-Chain TX
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className='col-span-full flex flex-col lg:min-h-[312px] lg:items-center lg:justify-center py-10" '>

    <div className=' safe-viewport grid gap-4 grid-cols-1 lg:grid-cols-20 grid-rows-1'>

        <div className=' grid grid-cols-3 gap-6 col-start-1 col-span-full lg:col-span-14 lg:col-start-4 row-start-1 lg:flex lg:justify-between'>
            <img src={ethereum} alt="" className='w-16 h-16 opacity-80 m-auto pointer-events-none' />
            <img src={ethereum} alt="" className='w-16 h-16 opacity-80 m-auto pointer-events-none' />
            <img src={ethereum} alt="" className='w-16 h-16 opacity-80 m-auto pointer-events-none' />
            <img src={ethereum} alt="" className='w-16 h-16 opacity-80 m-auto pointer-events-none' />
            <img src={ethereum} alt="" className='w-16 h-16 opacity-80 m-auto pointer-events-none' />
        </div>
        <div className=' col-start-1 col-span-full flex justify-center items-center mt-10'>

            <a href="https://docs.phala.network/developers/phat-contract/supported-chains" className='btn font-bold bg-black text-white justify-center border border-solid border-black rounded-full px-4 py-2 hover:bg-whiteAlpha-700 hover:text-black transition-colors' target="_blank"
                rel="noopener" >
                View All Supported Networks
            </a>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Hero

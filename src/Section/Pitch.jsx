import React from 'react'
import contactImg from '../assets/home/contact-us.png'



const Pitch = () => {
  return (
   <>
   
   <section className='section-pitch-pionne'>




<div className='safe-viewport py-10 lg:py-32 px-10 grid grid-cols-1 lg:gap-x-10 lg:grid-cols-12 gap-y-10 border border-solid border-black-100 rounded bg-black-100'>

    <header className='row-start-1 col-start-1 col-span-full flex flex-col gap-5 pb-10 lg:pb-20'>

        <h2 className='text-3xl lg:text-6xl text-black font-black'>
            Cutting Edge Web3 Usecases
        </h2>

        <div className=' mt-7'>
            <a href="" className='bg-[#7F52FA] text-white text-center py-3 rounded-full font-bold hover:bg-[#9977F5] px-6 min-w-[300px]'>Learn
                More</a>
        </div>

    </header>

    <main className='row-start-2 invisible col-span-full xl:visible xl:col-start-6 xl:col-span-7'>

        <div className="hidden xl:grid grid-cols-6 grid-rows-8 gap-2.5 text-white text-xl font-extrabold mx-auto">

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 active bg-phalaPurple-500 text-white flex flex-row text-left bento-1">
                <h4 className="text-20 font-bold">Trustless MEV
                </h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-2">
                <h4 className="uppercase">Account Abstraction</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-7">
                <h4 className="uppercase">L2 Sequencer</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-4">
                <h4 className="uppercase">Decentralized API</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-5">
                <h4 className="uppercase">Web3 AI</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-6">
                <h4 className="uppercase">Distributed Computing</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-9">
                <h4 className="uppercase">Gateway &amp; CDN</h4>
            </button>

            <button
                className="rounded-sm p-5 w-full aspect-square transition-all border-2 border-solid border-transparent hover:border-phalaPurple-500 bg-white text-black-800 flex flex-row text-left bento-3">
                <h4 className="uppercase">Relayers &amp; Validators</h4>
            </button>
        </div>
    </main>

    <aside class="row-start-2 col-span-full xl:col-start-1 xl:col-span-5">
        <div class="h-full">
            <div class="flex flex-col lg:gap-10 bg-white rounded-sm p-5 lg:p-10 lg:h-full">
                <h4 class="text-32 font-bold invisible h-0 lg:visible lg:h-auto">Trustless MEV</h4>
                <div class="flex flex-col gap-5 leading-normal text-16">
                    <p>Trustless MEV refers to the concept of eliminating reliance on trusted service
                        providers, such as Flashbot, in the Miner Extractable Value (MEV) ecosystem.
                        Currently, 80% of Ethereum blocks are built by MEV, but the existing MEV stack
                        depends on these trusted providers.</p>
                    <p>The problem with this approach is that it creates a single point of trust in the
                        MEV ecosystem. Researchers have suggested using Secure Enclaves, like Intel SGX,
                        to minimize this trust dependency.</p>
                    <p>Phala Network, an off-chain compute network powered by Secure Enclaves, can be
                        utilized to build the MEV core stack with minimal trust assumptions. This
                        enables a more secure and trustless MEV ecosystem for developers and users
                        alike.</p>
                </div>
            </div>


        </div>
    </aside>



    <div className='rounded p-8 bg-white mt-8 lg:mt-32 col-span-full grid grid-cols-1 lg:grid-cols-12'>

        <form action="" className='row-start-1 col-span-full lg:col-span-6 flex flex-col gap-3 lg:pr-8 relative p-2'>
            <legend className='text-md lg:text-24 font-bold mb-4'>
                We help you build your future.<br />Share your
                vision:
            </legend>

            <fieldset className=' w-full flex flex-col lg:flex-row gap-3'>

                <div className='relative w-full'>

                    <input type="text" placeholder='Gavin Belson' className='bg-black-50 rounded-xs px-5 py-2.5 w-full' name='first Name' />
                </div>
                <div className='relative w-full'>

                    <input type="email" placeholder='gavin@hooli.com ' className='bg-black-50 rounded-xs px-5 py-2.5 w-full' name='email' />
                </div>
            </fieldset>
            <div className='relative w-full'>
                <textarea name="message" id="" className='bg-black-50 rounded-xs px-5 py-2.5 w-full' rows={7} placeholder=" I'm gonna be asking you to say a few words. Just a bit about how much of a fan you are, dedicated to the cause, my cause, maybe lead with a joke. Be good to have you there, Richard. Securing my legacy with you at my wing. Wear pants you can kneel in.">
                </textarea>
            </div>

            <div>
                <button className=' px-4 py-4 font-bold rounded  bg-gray  relative ' disabled="">
                    <span className=' text-gray'> Submite</span>
                </button>
            </div>
        </form>

        <div className=' row-start-1 col-span-full lg:col-span-4 lg:col-end-12 flex flex-col-reverse items-end lg:flex-col lg:items-start lg:relative opacity-25 lg:opacity-100 pointer-events-none select-none'>

            <img src={contactImg} alt="" className='w-1/2 lg:w-auto lg:absolute pointer-events-none select-none bottom-0' />
        </div>
    </div>
</div>
</section>
   </>
  )
}

export default Pitch

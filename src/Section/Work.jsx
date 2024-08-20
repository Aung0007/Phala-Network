import React from 'react'
import Anim from '../Animated/Anim'


const Work = () => {
  return (
    <>


    
<section id='section-how-it-works'>

<div className='safe-viewport py-10 border border-solid border-black-100 rounded bg-black-900 text-white xl:hidden'>
    <header className=' row-start-1 col-start-1 col-span-full'>
        <h2 className='text-3xl lg:text-6xl font-black'>
            How It works
        </h2>
    </header>
    <div className='mt-10'>
        <h3 className=' font-semibold text-2xl uppercase flex items-center'>
            Correctness
        </h3>

        <p className='mt-5'>
            Phat Contracts are deployed to the blockchain and assigned to the offchain workers,
            running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave
            remote attestation to verify that the executed code is the one published on the blockchain.
        </p>
    </div>
    <div className='mt-10'>
        <h3 className=' font-semibold text-2xl uppercase flex items-center'>
            Replicated
        </h3>

        <p className='mt-5'>
            Phat Contracts are deployed to the blockchain and assigned to the offchain workers,
            running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave
            remote attestation to verify that the executed code is the one published on the blockchain.
        </p>
    </div>
    <div className='mt-10'>
        <h3 className=' font-semibold text-2xl uppercase flex items-center'>
            Confidentiality
        </h3>

        <p className='mt-5'>
            Phat Contracts are deployed to the blockchain and assigned to the offchain workers,
            running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave
            remote attestation to verify that the executed code is the one published on the blockchain.
        </p>
    </div>
</div>



<div
                class="safe-viewport py-10 lg:py-32 !px-16 hidden xl:grid grid-cols-1 lg:gap-x-10 lg:grid-cols-12 gap-y-10 border border-solid border-black-100 rounded bg-black-900 text-white">
                <header class="row-start-1 col-start-1 col-span-full flex flex-col gap-5 pb-10 lg:pb-20">
                    <h2 class="text-3xl lg:text-6xl font-black">How Phala Network works</h2>
                </header>
                <main class="col-start-1 col-span-full grid grid-cols-12 gap-6">
                    <div class="col-span-4 flex flex-col gap-6 justify-center">
                        <div open="">
                            <div class="relative"><button
                                    class="btn duration-0 relative z-10 rounded-md px-6 py-2 font-bold text-xl bg-green-500 text-black-800">Correctness</button>
                                <div class="absolute top-0 left-0 -right-6 aspect-[275/56] -translate-y-1/4 bg-[length:100%_100%]"
                                ></div>
                            </div>
                            <div class="py-4 text-sm text-black-400">Phat Contracts are deployed to the blockchain and
                                assigned to the offchain workers, running inside Secure Enclaves. Anyone can check the
                                signed transactions and Secure Enclave remote attestation to verify that the executed
                                code is the one published on the blockchain.</div>
                        </div>
                        <div>
                            <div class="relative"><button
                                    class="btn duration-0 relative z-10 rounded-md px-6 py-2 font-bold text-xl text-black-200 border-black-200 border-[1px]">Replicated</button>
                            </div>
                     
                        </div>
                        <div>
                            <div class="relative"><button
                                    class="btn duration-0 relative z-10 rounded-md px-6 py-2 font-bold text-xl text-black-200 border-black-200 border-[1px]">Confidentiality</button>
                            </div>
                     
                        </div>
                    </div>
                    <div class="col-start-5 col-span-8 bg-[length:100%_100%]">
                            <Anim/>
                    </div>
                </main>
            </div>

</section>
    
    </>
  )
}

export default Work

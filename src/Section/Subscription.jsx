import React from 'react'
import formImg from '../assets/home/newsletter-aside.jpg'


const Subscription = () => {
  return (
   <>
   

   <section id='section-subscription' className='section-subscription p-3 lg:p-0'>

<div className='safe-viewport grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24'>
    <div className='row-start-1 col-span-full xl:col-start-2 xl:col-span-12 3xl:col-start-4 xl:px-10 bg-[#262626]'>

        <form action="" className='text-white py-16 flex flex-col gap-4'>
            <legend className='text-32 font-bold max-w-xl'>
                Get the latest Phala Content Straight To Your Inbox.
            </legend>
            <div className="max-w-3xl flex flex-col lg:flex-row gap-6 relative">

                <div className='pointer-events-none absolute w-full h-full py-2 px-3 text-white text-left z-[2] rounded leading-none flex flex-row items-center justify-between'>


                </div>

                <input placeholder="Enter your email address"
                    className="flex-1 rounded-xs border border-solid border-whiteAlpha-500 bg-transparent py-3 px-5" />

                <button
                    type="submit"
                    class="btn-rounded min-w-[240px] text-[#999999] uppercase inline-flex flex-row items-center justify-center rounded-full
                transition-colors font-semibold text-sm lg:text-base xl:text-lg border border-[#999999]"
                    disabled="">Subscribe Now</button>
            </div>

            <div className="text-xs leading-5 lg:text-base lg:leading-6"><label className="flex flex-row"><input
                className="mr-3" type="checkbox" /><span>Yes, I agree to receive email communications
                    from Phala</span></label></div>
        </form>
    </div>

    <div
        class="hidden xl:block xl:h-full xl:bg-[#f3f3f3] row-start-1 col-span-full xl:col-start-14 3xl:col-start-16 -ml-4 relative">
        <img src={formImg} alt="" class="absolute bottom-0 left-0 aspect-[1860/728]" />
    </div>
</div>

</section>
   </>
  )
}

export default Subscription

import React from 'react'
import '../Components/Style.css'
import MobileNav from './MobileNav'
import { IoMdListBox } from "react-icons/io";
import menuAboutImg from '../assets/icons/menu-about-phala.png'
const Nav = () => {

  return (
    <>



      {/* nav - initially hidden - show on desktop mode */}
      <nav class="site-nav w-screen fixed z-30 top-0 left-0 px-10">
        <div class="safe-viewport py-6">
          <div class="bg-black-800 rounded-sm grid gap-4 grid-cols-2 xl:grid-cols-20 3xl:grid-cols-24 grid-rows-1"><a
            class="flex gap-2.5 items-center h-[4rem] p-2 col-span-1 col-start-1 xl:col-span-3 row-start-1"
            href="index.html">
            <svg viewBox="0 0 56 56"
              class="h-full untanglable bg-phalaGreen-500 rounded-sm transition-colors">
              <path
                d="M37.2219 13.7344H20.3467H19.5381H14.7217V24.8781V26.656V27.6629H20.3467V26.656V24.8781V19.3063H37.2219V13.7344ZM37.222 19.3063H42.847V27.6629H37.222V19.3063ZM14.7217 33.2343H20.3468V36.0214V41.591H14.7217V36.0214V34.6279V33.2343ZM20.3468 27.6625H37.2196V33.2343H20.3468V27.6625Z"
                fill="#000"></path>
            </svg>
            <svg viewBox="0 0 67 24" class="h-1/2 untanglable">
              <path
                d="M10.6889 4.48711V0.0100732L8.64247 0.00012207V8.97906H10.6889V6.28538H14.7943V8.98901H16.8407V0.0100732H14.7943V4.48711H10.6889ZM3.83922 6.42227C6.14425 6.42227 7.46752 5.21845 7.46752 3.12668C7.46752 1.13937 6.14425 0.0101667 3.84424 0.0101667H0V8.9891H2.03888V6.42227H3.83922ZM3.73627 1.699C4.87623 1.699 5.52405 2.19645 5.52405 3.19135C5.52405 4.21609 4.87623 4.73095 3.73627 4.74089H2.03888V1.699H3.73627ZM24.7099 7.19331H20.5568L19.8362 8.9891H17.7245L21.6616 0.0101667H23.7733L27.6452 8.9891H25.4557L24.7099 7.19331ZM23.9818 5.39753L22.6459 2.12681L21.2976 5.39753H23.9818ZM37.8299 7.19331H41.9829L42.7136 8.9891H44.9032L41.0288 0.0101667H38.9196L34.985 8.9891H37.0967L37.8299 7.19331ZM39.924 2.12681L41.2548 5.39753H38.5756L39.924 2.12681ZM30.6334 0.0101667V7.22316H34.5178V8.99408H28.587V0.0151385L30.6334 0.0101667ZM6.25975 20.7462L1.85809 14.9758H0V23.9448H1.94848V18.1869L6.3376 23.9448H8.20071V14.9758H6.25975V20.7462ZM16.4167 14.9758V16.6572H11.5505V18.6047H15.9145V20.2861H11.5505V22.2759H16.5473V23.9448H9.51667V14.9758H16.4167ZM24.7904 16.6945V14.9758H17.2199V16.6945H19.9819V23.9448H22.0284V16.6945H24.7904ZM27.5775 14.9758L29.4808 21.746L31.3715 14.9758H33.3803L35.2961 21.746L37.1869 14.9758H39.2835L36.2704 23.9522H34.1587L32.3408 17.5526L30.4777 23.9448H28.3735L25.383 14.9683L27.5775 14.9758ZM44.2774 24C47.0294 24 49.1135 22.0251 49.1135 19.4508C49.1135 16.8666 47.0269 14.9315 44.2774 14.9315C41.528 14.9315 39.4439 16.8641 39.4439 19.4508C39.4439 22.0375 41.5255 24 44.2774 24ZM42.3338 21.4152C41.8131 20.892 41.5233 20.1855 41.528 19.4508C41.5305 18.9007 41.6978 18.3637 42.0087 17.9079C42.3197 17.4521 42.7602 17.098 43.2745 16.8904C43.7888 16.6829 44.3538 16.6313 44.8977 16.7421C45.4417 16.8529 45.9402 17.1212 46.3301 17.513C46.7199 17.9048 46.9836 18.4024 47.0877 18.9428C47.1918 19.4831 47.1315 20.0419 46.9146 20.5484C46.6978 21.0548 46.334 21.486 45.8694 21.7875C45.4048 22.0889 44.8604 22.2469 44.3051 22.2415C43.5634 22.2356 42.8544 21.9384 42.3338 21.4152ZM55.4211 23.9448L53.9849 21.388H51.9008V23.9448H49.8569V14.9758H53.7915C56.1619 14.9758 57.5077 16.1051 57.5077 18.0924C57.5077 19.4778 56.9126 20.4776 55.8103 20.99L57.7513 23.9448H55.4211ZM51.9058 19.6867H53.7966C54.924 19.6867 55.5693 19.1743 55.5693 18.1496C55.5693 17.1248 54.924 16.6572 53.7966 16.6572H51.9058V19.6867ZM61.8468 20.2911L64.4506 23.9448H66.9113L63.2755 18.7216L66.6853 14.9758H64.3175L60.5511 19.0549V14.9758H58.5047V23.9448H60.5411V21.7262L61.8468 20.2911Z"
                fill="#fff"></path>
            </svg>
          </a>

            <div class="col-span-1 col-start-2 row-start-1 xl:hidden flex items-center justify-end mr-5">
              <MobileNav />

            </div>

            <ul
              class="hidden xl:flex xl:items-center xl:gap-4 xl:h-[4rem] xl:col-start-5 xl:col-span-17 3xl:col-start-6 3xl:col-span-19 row-start-1">
              <li class="relative h-[3rem]  items-center cursor-pointer rounded-sm">
                <div className=' drop'>
                  <button
                    class="w-full h-full flex"><span
                      class="px-8 py-4 transition-all text-white untanglable h-full flex pb-8 items-center">Developers<span
                        class="ml-1.5" ><svg stroke="currentColor" fill="none"
                          stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" class="text-black-650 svg" height="1em" width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></span></span></button>



                  <div className='dropdown pl-5   absolute '>

                    <div className=' flex w-[50vw]   '>

                      <div className=' w-[45%] bg-[#CDFA50] p-5 rounded-sm '>
                        <p><IoMdListBox /></p>
                        <h4 className='mt-3'>
                          DOC
                        </h4>
                        <p className='mt-2 text-[13px] text-[#63675B]'>
                          Discover how Phala&#x27;s AI Agent Contract offers the essential tools to
                          develop and profit from intelligent applications.
                        </p>

                        <p className=' mt-3 hText '><a href="" className=' flex '>Explore Now
                          <svg stroke="currentColor"
                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-[6px] ml-1"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                            </path>
                          </svg>
                        </a></p>

                      </div>



                      <div className=' w-[55%] bg-[#333333] text-white p-4 rounded-md -ml-6'>

                        <p className=' flex text-center align-middle mt-2'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className=' flex ml-3 -mt-2 hText hover:text-[#CDFA50]'>About Phala Network<svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                          </path>
                        </svg></a>
                        </p>

                        <p className=' flex text-center align-middle mt-7'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className=' flex ml-3 -mt-2 hText hover:text-[#CDFA50]'>About Phala Network<svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                          </path>
                        </svg></a>
                        </p>

                        <p className=' flex text-center align-middle mt-7'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className=' flex ml-3 -mt-2 hText hover:text-[#CDFA50]'>About Phala Network<svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                          </path>
                        </svg></a>
                        </p>

                        <div>
                          <p className=' flex text-center align-middle mt-7'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>



                      </div>
                    </div>
                  </div>

                </div>


              </li>


              <li class="relative h-[3rem] flex items-center cursor-pointer rounded-sm">
                <div className="drop">
                  <button
                    class="w-full h-full"><span
                      class="px-8 py-4 transition-all text-white untanglable h-full flex items-center">Network<span
                        class="ml-1.5" ><svg stroke="currentColor" fill="none"
                          stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" class="text-black-650 svg" height="1em" width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></span></span></button>

                  <div className='dropdown pl-5 pt-5   absolute '>

                    <div className=' flex w-[27vw]   '>

                      <div className=' w-[100%] bg-[#333333] text-white p-5 rounded-sm '>
                        

                      <div>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                        <div className=' mt-9'>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                        <div className='mt-9'>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                        <div className='mt-9'>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                        <div className='mt-9'>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                        <div className='mt-9'>
                          <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
                            <div className=' flex ml-3 -mt-2 hText'>
                              About Phala Network<svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                </path>
                              </svg>
                            </div>
                            <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
                            </div>
                          </a>
                          </p>

                        </div>
                      </div>




                    </div>
                  </div>
                </div>
              </li>



              <li class="relative h-[3rem] flex items-center cursor-pointer rounded-sm">
               <div className="drop">
               <button
                class="w-full h-full"><span
                  class="px-8 py-4 transition-all text-white untanglable h-full flex items-center">Discover<span
                    class="ml-1.5" ><svg stroke="currentColor" fill="none"
                      stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                      stroke-linejoin="round" class="text-black-650 svg" height="1em" width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg></span></span></button>

                    <div className='dropdown pl-5 pt-5   absolute '>

<div className=' flex w-[27vw]   '>

  <div className=' w-[100%] bg-[#333333] text-white p-5 rounded-sm '>
    

  <div>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
        <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
        </div>
      </a>
      </p>

    </div>
    <div className=' mt-9'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
        <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
        </div>
      </a>
      </p>

    </div>
    <div className='mt-9'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
        <div className=' text-[13px] w-[90%] ml-3 text-left mt-1 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut doloribus molestias?
        </div>
      </a>
      </p>

    </div>



  </div>




</div>
</div>
               </div>
                    </li>


              <li class="relative h-[3rem] flex items-center cursor-pointer rounded-sm">

                <div className="drop">
                <button
                class="w-full h-full"><span
                  class="px-8 py-4 transition-all text-white untanglable h-full flex items-center">AI
                  Agent Contract<span class="ml-1.5" ><svg stroke="currentColor"
                    fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="text-black-650 svg" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg></span></span></button>

                  <div className='dropdown pl-5 pt-5   absolute '>

<div className=' flex w-[27vw]   '>

  <div className=' w-[100%] bg-[#333333] text-white p-5 rounded-sm '>
    

  <div>
      <p className=' flex text-center align-middle mt-5'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
      </a>
      </p>

    </div>
    <div className=' mt-5'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
      
      </a>
      </p>

    </div>
    <div className=' mt-5'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
      
      </a>
      </p>

    </div>

    <div className=' mt-5'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
      
      </a>
      </p>

    </div>
    <div className='mt-4'>
      <p className=' flex text-center align-middle mt-3'> <img src={menuAboutImg} className='h-3.5 w-3.5 ml-1' alt="" />   <a href="" className='  hover:text-[#CDFA50]'>
        <div className=' flex ml-3 -mt-2 hText'>
          About Phala Network<svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            </path>
          </svg>
        </div>
      </a>
      </p>

    </div>



  </div>




</div>
</div>
                </div>
                  
                  </li>



              <div class="flex flex-row gap-2 grow justify-end pr-3"><a title="Blog"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-whiteAlpha-50 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="blog.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                  version="1.1" viewBox="0 0 16 16" class="w-8 h-6" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 0v1.5c1.148 0 2.261 0.225 3.308 0.667 1.012 0.428 1.921 1.041 2.702 1.822s1.394 1.69 1.822 2.702c0.443 1.047 0.667 2.16 0.667 3.308h1.5c0-5.523-4.477-10-10-10z">
                  </path>
                  <path
                    d="M6 3v1.5c1.469 0 2.85 0.572 3.889 1.611s1.611 2.42 1.611 3.889h1.5c0-3.866-3.134-7-7-7z">
                  </path>
                  <path
                    d="M7.5 6l-1 1-3.5 1-3 6.5 0.396 0.396 3.638-3.638c-0.022-0.083-0.034-0.169-0.034-0.259 0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1c-0.090 0-0.176-0.012-0.259-0.034l-3.638 3.638 0.396 0.396 6.5-3 1-3.5 1-1-2.5-2.5z">
                  </path>
                </svg></a><a title="X.com"
                  class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-whiteAlpha-50 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                  href="https://twitter.com/PhalaNetwork"><svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 24 24" class="w-7 h-6" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                    </path>
                  </svg></a><a title="Telegram"
                    class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-whiteAlpha-50 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                    href="https://t.me/phalanetwork"><svg stroke="currentColor" fill="currentColor"
                      stroke-width="0" viewBox="0 0 256 256" class="w-8 h-6" height="1em" width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M235.57,27.7a7,7,0,0,0-7.13-1.22L25.78,105.79a12.23,12.23,0,0,0,2.1,23.39L82,139.81V200a14,14,0,0,0,24.08,9.71l26.64-27.63,41.58,36.45a13.9,13.9,0,0,0,9.2,3.49,14.33,14.33,0,0,0,4.36-.69,13.86,13.86,0,0,0,9.34-10.17L237.82,34.57A7,7,0,0,0,235.57,27.7ZM30.05,117.37h0a.46.46,0,0,1,0-.32.51.51,0,0,1,.15-.08L189.91,54.45l-103.3,74L30.2,117.41Zm67.39,84A2,2,0,0,1,94,200V148.11l29.69,26Zm88.07,7.08a1.93,1.93,0,0,1-1.34,1.44,2,2,0,0,1-2-.4L97.64,135.34,223,45.5Z">
                    </path>
                  </svg></a><a title="Discord"
                    class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-whiteAlpha-50 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                    href="https://discord.gg/phala-network"><svg stroke="currentColor" fill="currentColor"
                      stroke-width="0" viewBox="0 0 16 16" class="w-8 h-6" height="1em" width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z">
                    </path>
                  </svg></a><a title="CoinMarketCap" target="_blank"
                    class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-whiteAlpha-50 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                    href="https://coinmarketcap.com/community/profile/PhalaNetwork/"><svg class="w-8 h-6"
                      viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z"
                      fill="currentColor"></path>
                  </svg></a></div>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Nav

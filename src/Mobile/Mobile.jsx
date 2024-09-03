import React, { useState } from 'react'
import '../Mobile/Style.css'

const Mobile = () => {
    const [isActive , setIsActive] = useState(false)
    const [isOne , setIsOne] = useState(false)
    const [isTwo , setIsTwo] = useState(false)
    const [isThree , setIsThree] = useState(false)
  return (
    <>
    <div class="site-nav-drawer flex flex-col justify-between">
        <div class="pt-8 px-8">
            <div class="col-span-1 col-start-2 row-start-1 xl:hidden flex items-center justify-end mr-5"><button
                    class="site-hamjurger-menu" aria-expanded="false" aria-label="Site Navigation Menu"></button></div>
            <div class="flex flex-col gap-5 text-whiteAlpha-800">
                <details class="" open="">
                    <summary class="flex flex-row gap-2 items-center text-xl font-bold"><div className={isActive ? ' toggle active' : 'toggle'} onClick={() => setIsActive(!isActive)} >
                    Developers
                        </div> 
                    <svg stroke="currentColor" fill="none" className={isActive ? ' route active' : 'route'}  onClick={() => setIsActive(!isActive)} 
                            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></summary>
                    <div class="overflow-hidden " >
                        <ul class="flex flex-col gap-1.5 mt-2.5">
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/"><span class="h-6 w-6 py-1"><svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 24 24" class="h-5 w-5" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z">
                                            </path>
                                            <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Docs<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Discover how Phala&#x27;s AI Agent Contract offers the essential tools to
                                                develop and profit from intelligent applications.</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/overview/phala-network?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><img src="icons/menu-about-phala.png"
                                            class="h-3.5 w-3.5 ml-1" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">About Phala Network<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/overview/ai-execution-layer?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><img src="icons/menu-ai-execution-layer.png"
                                            class="h-5 w-5 -mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">AI Execution Layer<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/ai-agent-contract/getting-started?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg stroke="currentColor" fill="none" stroke-width="2"
                                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                            class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                            </path>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Build OpenAI and Langchain Agents<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/developers/phat-contract/builders-program?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 00-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z">
                                            </path>
                                            <path
                                                d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 00-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z">
                                            </path>
                                            <path
                                                d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 00-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z">
                                            </path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Builders Program<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Receive grants and technical guidance to bring your idea to life with
                                                Phat Contract</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </details>
                <details class="" open="" >
                    <summary class="flex flex-row gap-2 items-center text-xl font-bold"> <div className={ isOne ? 'one active' : 'one'} onClick={() => setIsOne(! isOne)}>
                    Network</div> <svg stroke="currentColor" className={isOne ?'route active' : 'route'} onClick={() =>setIsOne(!isOne)} fill="none"
                            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></summary>
                    <div class="overflow-hidden bg-[#333333] pb-2">
                        <ul class="flex flex-col gap-1.5 mt-2.5">
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/tech-specs/pha-token?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><img src="icons/menu-pha-token.png"
                                            class="h-5 w-5 mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">PHA Token<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>PHA is the native token of the Phala blockchain</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/compute-providers/basic-info?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg class="h-5 w-5" viewBox="0 0 24 24">
                                            <path
                                                d="M15.1579 19.8935H21.4738C21.6103 19.9029 21.7387 19.9614 21.8354 20.0581C21.9321 20.1548 21.9906 20.2832 22 20.4196V21.4718C22 21.6115 21.9446 21.7455 21.846 21.8445C21.7474 21.9435 21.6136 21.9994 21.4738 22H15.1579C15.021 21.9909 14.8921 21.9323 14.7952 21.8351C14.6984 21.7379 14.6403 21.6087 14.6318 21.4718V20.4196C14.6318 20.3505 14.6454 20.2821 14.6719 20.2183C14.6983 20.1544 14.737 20.0964 14.7859 20.0476C14.8348 19.9987 14.8928 19.96 14.9566 19.9336C15.0204 19.9071 15.0889 19.8935 15.1579 19.8935Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M15.158 16.737H21.4738C21.6104 16.746 21.7391 16.8043 21.8359 16.9011C21.9327 16.9978 21.991 17.1265 22 17.2631V18.3152C21.9994 18.4546 21.9438 18.5881 21.8453 18.6866C21.7467 18.7852 21.6132 18.8408 21.4738 18.8413H15.158C15.0214 18.8323 14.8927 18.774 14.7959 18.6772C14.6991 18.5804 14.6408 18.4518 14.6318 18.3152V17.2631C14.6315 17.1939 14.6449 17.1254 14.6713 17.0614C14.6976 16.9974 14.7364 16.9393 14.7853 16.8904C14.8342 16.8415 14.8923 16.8028 14.9563 16.7764C15.0202 16.7501 15.0888 16.7367 15.158 16.737Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M15.1579 13.5783H21.4738C21.6104 13.5873 21.7391 13.6456 21.8359 13.7424C21.9327 13.8392 21.991 13.9678 22 14.1044V15.1566C22 15.2256 21.9864 15.2941 21.9599 15.3579C21.9335 15.4217 21.8947 15.4797 21.8459 15.5286C21.797 15.5774 21.739 15.6162 21.6752 15.6426C21.6114 15.669 21.5429 15.6826 21.4738 15.6826H15.1579C15.0214 15.6736 14.8927 15.6153 14.7959 15.5186C14.6991 15.4218 14.6408 15.2931 14.6318 15.1566V14.1044C14.6318 14.0353 14.6454 13.9669 14.6719 13.903C14.6983 13.8392 14.737 13.7812 14.7859 13.7324C14.8348 13.6835 14.8928 13.6448 14.9566 13.6183C15.0204 13.5919 15.0889 13.5783 15.1579 13.5783Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M17.7887 6.74334C17.7822 6.60486 17.7289 6.47267 17.6374 6.36848L13.4347 2.15336C13.3307 2.06128 13.1985 2.0072 13.0597 2H2.52615C2.3866 2 2.25278 2.05543 2.15411 2.15409C2.05544 2.25275 2 2.38657 2 2.5261V21.4718C1.99972 21.5409 2.01314 21.6095 2.03948 21.6734C2.06582 21.7374 2.10457 21.7955 2.15349 21.8444C2.2024 21.8933 2.26051 21.9321 2.32447 21.9584C2.38843 21.9847 2.45697 21.9981 2.52615 21.9979H13.0512C13.191 21.9979 13.325 21.9425 13.424 21.8439C13.523 21.7453 13.5789 21.6115 13.5795 21.4718V14.1044C13.5795 13.6858 13.7458 13.2843 14.0418 12.9883C14.3378 12.6924 14.7393 12.5261 15.158 12.5261H17.2689C17.3381 12.5264 17.4066 12.5129 17.4706 12.4866C17.5346 12.4603 17.5927 12.4215 17.6416 12.3726C17.6905 12.3237 17.7293 12.2656 17.7556 12.2017C17.7819 12.1377 17.7954 12.0692 17.7951 12L17.7887 6.74334ZM13.0512 6.74334V3.05858L16.7364 6.74334H13.0512ZM11.4728 11.4803C11.542 11.48 11.6105 11.4934 11.6745 11.5198C11.7384 11.5461 11.7965 11.5848 11.8455 11.6338C11.8944 11.6827 11.9331 11.7408 11.9595 11.8047C11.9858 11.8687 11.9992 11.9372 11.9989 12.0064V14.1108C11.9992 14.1799 11.9858 14.2485 11.9595 14.3124C11.9331 14.3764 11.8944 14.4345 11.8455 14.4834C11.7965 14.5323 11.7384 14.571 11.6745 14.5974C11.6105 14.6237 11.542 14.6371 11.4728 14.6368H10.4205V15.1629C10.4205 15.3025 10.3651 15.4363 10.2664 15.5349C10.1677 15.6336 10.0339 15.689 9.89435 15.689C9.7548 15.689 9.62097 15.6336 9.5223 15.5349C9.42363 15.4363 9.36819 15.3025 9.36819 15.1629V14.6241H8.32229C8.18275 14.6241 8.04892 14.5686 7.95025 14.47C7.85157 14.3713 7.79615 14.2375 7.79615 14.098C7.79615 13.9584 7.85157 13.8246 7.95025 13.726C8.04892 13.6273 8.18275 13.5719 8.32229 13.5719H10.953V12.5197H8.32229C8.18275 12.5197 8.04892 12.4643 7.95025 12.3656C7.85157 12.2669 7.79615 12.1331 7.79615 11.9936V9.88711C7.79615 9.74759 7.85157 9.61377 7.95025 9.5151C8.04892 9.41644 8.18275 9.36102 8.32229 9.36102H9.37459V8.83493C9.37459 8.6954 9.43002 8.56158 9.52869 8.46292C9.62737 8.36426 9.76119 8.30883 9.90073 8.30883C10.0403 8.30883 10.1741 8.36426 10.2728 8.46292C10.3715 8.56158 10.4269 8.6954 10.4269 8.83493V9.36102H11.4792C11.6132 9.36954 11.739 9.42879 11.8309 9.52671C11.9228 9.62464 11.9739 9.75389 11.9739 9.88818C11.9739 10.0225 11.9228 10.1517 11.8309 10.2496C11.739 10.3476 11.6132 10.4068 11.4792 10.4153H8.84205V11.4675L11.4728 11.4803Z"
                                                fill="currentColor"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Compute to Earn<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Provide hardware to the network and earn rewards!</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://app.phala.network/khala?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg class="h-5 w-5" viewBox="0 0 24 24">
                                            <path
                                                d="M11.8086 3.19182L8.49748 7.18865C8.38969 7.32285 8.33982 7.49419 8.35881 7.665L9.4314 18.4238C9.44606 18.5762 9.51538 18.7183 9.62667 18.824L11.8652 20.8647C11.9568 20.9516 12.0784 21 12.2048 21C12.3313 21 12.4529 20.9516 12.5444 20.8647L14.7802 18.824C14.8936 18.7199 14.9634 18.5769 14.9755 18.4238L16.0509 7.665C16.0599 7.58024 16.052 7.49454 16.0277 7.4128C16.0035 7.33106 15.9632 7.25489 15.9094 7.18865L12.5982 3.19182C12.5514 3.13207 12.4915 3.08375 12.4231 3.05051C12.3547 3.01727 12.2795 3 12.2034 3C12.1273 3 12.0522 3.01727 11.9838 3.05051C11.9154 3.08375 11.8555 3.13207 11.8086 3.19182Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M19.4922 7.24503L17.1376 9.23499C17.0105 9.35092 16.9309 9.50952 16.914 9.68034L16.065 16.82C16.0437 16.9718 16.0736 17.1265 16.1499 17.2597L17.098 18.8409C17.1206 18.8865 17.1525 18.9268 17.1918 18.9592C17.2311 18.9916 17.2769 19.0153 17.326 19.0289C17.3752 19.0425 17.4267 19.0455 17.4771 19.0379C17.5275 19.0303 17.5758 19.0122 17.6187 18.9847L19.096 18.0686C19.2175 17.986 19.3058 17.8632 19.345 17.7219L21.4336 10.9177C21.4868 10.7496 21.4799 10.5683 21.4138 10.4047L20.1091 7.41414C20.0917 7.35241 20.0586 7.29621 20.013 7.25099C19.9673 7.20576 19.9107 7.17305 19.8486 7.15604C19.7865 7.13902 19.7211 7.13828 19.6587 7.15387C19.5962 7.16946 19.5389 7.20087 19.4922 7.24503Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M4.90331 7.24503L7.25791 9.23499C7.38704 9.34938 7.46708 9.50883 7.48148 9.68034L8.33049 16.82C8.35265 16.9715 8.3238 17.1262 8.24843 17.2597L7.30035 18.8409C7.27747 18.8866 7.24522 18.9269 7.20566 18.9593C7.1661 18.9917 7.12014 19.0155 7.07076 19.029C7.02138 19.0426 6.96969 19.0457 6.91905 19.038C6.8684 19.0304 6.81993 19.0122 6.7768 18.9847L5.30234 18.0686C5.18009 17.9867 5.09167 17.8636 5.05332 17.7219L2.96191 10.9177C2.90956 10.7493 2.91755 10.568 2.98454 10.4047L4.28637 7.41414C4.30378 7.35241 4.33692 7.29621 4.38256 7.25099C4.42821 7.20576 4.48481 7.17305 4.54688 7.15604C4.60896 7.13902 4.67438 7.13828 4.73684 7.15387C4.79929 7.16946 4.85664 7.20087 4.90331 7.24503Z"
                                                fill="currentColor"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Stake<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Help secure the network and earn yield by staking your PHA</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://khala.subsquare.io/?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z">
                                            </path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Govern<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Take an active part in deciding the future direction of off-chain compute
                                            </p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://subbridge.io/?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg class="h-4 w-4 ml-0.5" viewBox="0 0 24 24">
                                            <path
                                                d="M8.57 0.509992L13.05 4.98999V2.03999C17.77 2.50999 21.53 6.26999 22 10.99H24C23.34 3.01999 15.49 -1.59001 8.57 0.509992ZM10.95 21.96C6.23 21.49 2.47 17.73 2 13.01H0C0.66 20.98 8.51 25.59 15.43 23.49L10.95 19.01V21.96Z"
                                                fill="currentColor"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Bridge<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Bring tokens to and from the Phala Blockchain with SubBridge</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><svg class="h-5 w-5" viewBox="0 0 24 24">
                                            <path
                                                d="M20.1944 19.3788L9.70213 19.3929C9.25706 19.3929 8.89658 19.7545 8.89859 20.1984C8.89859 20.6424 9.25908 21 9.70414 21H9.70616L20.1965 20.9859C20.6415 20.9859 21.002 20.6243 21 20.1804C21 19.7384 20.6395 19.3788 20.1944 19.3788ZM19.2056 8.06451C20.3415 6.93147 20.3556 5.09531 19.2399 3.98237L19.0828 3.82567C18.531 3.27321 17.802 3 17.0689 3C16.3197 3 15.5645 3.28728 14.9906 3.85982L5.05208 13.7739C3.91625 14.9069 2.38772 18.9388 3.2557 19.8067C3.39063 19.9413 3.64639 19.9996 3.9807 19.9996C5.42666 19.9996 8.34477 18.8987 9.26713 17.9806L19.2056 8.06451Z"
                                                fill="currentColor"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Learn<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Explore the architecture and power of Phala Network</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </details>
                <details class="" open="">
                    <summary class="flex flex-row gap-2 items-center text-xl font-bold"> <div className={isTwo ?'two active' : 'two'} onClick={() => setIsTwo(!isTwo)}>
                    Discover</div> <svg stroke="currentColor" className={isTwo ? 'route active' : 'route'} onClick={()=> setIsTwo (!isTwo)} fill="none"
                            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></summary>
                    <div class="overflow-hidden" >
                        <ul class="flex flex-col gap-1.5 mt-2.5">
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="blog.html"><span class="h-6 w-6 py-1"><svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="96" height="96" x="96" y="112" fill="none" rx="16" ry="16">
                                            </rect>
                                            <path
                                                d="M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z">
                                            </path>
                                            <path
                                                d="M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z">
                                            </path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Blog<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Stay up-to-date with all things Phala</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="changelog.html"><span class="h-6 w-6 py-1"><svg class="h-5 w-5"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289L20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V8.41421L13.5858 3H6Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M8.04983 13.2001C8.16029 13.2001 8.24923 13.2898 8.25554 13.4001C8.36388 15.2933 10.001 16.8001 11.9998 16.8001C14.0686 16.8001 15.7498 15.1861 15.7498 13.2001C15.7498 11.2141 14.0686 9.60011 11.9998 9.60011V11.7655C11.9998 11.8536 11.8941 11.8986 11.8306 11.8376L9.10027 9.21652C8.97728 9.09846 8.97728 8.90176 9.10027 8.78369L11.8306 6.16259C11.8941 6.10157 11.9998 6.14662 11.9998 6.23473V8.40011C14.7623 8.40011 16.9998 10.5481 16.9998 13.2001C16.9998 15.8521 14.7623 18.0001 11.9998 18.0001C9.30718 18.0001 7.11332 15.9594 7.0041 13.4003C6.99939 13.2899 7.08938 13.2001 7.19983 13.2001H8.04983Z"
                                                fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.2498 6.23473C12.2498 5.92634 11.8799 5.76868 11.6574 5.98224L8.92713 8.60335C8.70166 8.8198 8.70166 9.18041 8.92713 9.39687L11.6574 12.018C11.8799 12.2315 12.2498 12.0739 12.2498 11.7655V9.85853C14.0725 9.98172 15.4998 11.4414 15.4998 13.2001C15.4998 15.0385 13.9402 16.5501 11.9998 16.5501C10.1254 16.5501 8.60545 15.1388 8.50513 13.3858C8.49178 13.1525 8.30192 12.9501 8.04983 12.9501H7.19983C6.95387 12.9501 6.74326 13.1518 6.75432 13.4109C6.86961 16.1122 9.18181 18.2501 11.9998 18.2501C14.8907 18.2501 17.2498 15.9997 17.2498 13.2001C17.2498 10.4817 15.0255 8.28103 12.2498 8.15574V6.23473ZM11.7498 6.58666V8.65011H11.9998C14.634 8.65011 16.7498 10.6957 16.7498 13.2001C16.7498 15.7045 14.634 17.7501 11.9998 17.7501C9.45401 17.7501 7.39174 15.8389 7.25687 13.4501H8.00816C8.14291 15.4666 9.88901 17.0501 11.9998 17.0501C14.1969 17.0501 15.9998 15.3337 15.9998 13.2001C15.9998 11.0665 14.1969 9.35011 11.9998 9.35011H11.7498V11.4136L9.2734 9.03618C9.2529 9.0165 9.2529 8.98372 9.2734 8.96404L11.7498 6.58666Z"
                                                fill="currentColor"></path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Changelog<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Latest changes for Phala</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://github.com/Phala-Network/growth-program"><span
                                        class="h-6 w-6 py-1"><svg stroke="currentColor" fill="currentColor"
                                            stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z">
                                            </path>
                                        </svg></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Ambassador Program<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body">
                                            <p>Become a community leader and earn rewards</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </details>
                <details class="" open="">
                    <summary class="flex flex-row gap-2 items-center text-xl font-bold"> <div className={isThree ? 'three active' : 'three'} onClick={()=> setIsThree(!isThree)}>AI Agent Contract</div> <svg stroke="currentColor"
                            fill="none" stroke-width="2" className={isThree ? 'route active' : 'route'} onClick={()=> setIsThree (!isThree)} viewBox="0 0 24 24" stroke-linecap="round"
                            stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></summary>
                    <div class="overflow-hidden">
                        <ul class="flex flex-col gap-1.5 mt-2.5">
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="ai.html"><span class="h-6 w-6 py-1"><img
                                            src="icons/menu-multi-ai-agent-contract.png"
                                            class="h-5 w-5 -mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Multi AI Agent Contract<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://docs.phala.network/tech-specs/ai-agent-contract?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><img src="icons/menu-use-ai-agent-contract.png"
                                            class="h-5 w-5 -mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Use AI Agent Contract<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://agentwars.phala.network/home?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"><img src="icons/menu-agent-wars.png"
                                            class="h-5 w-5 -mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Agent Wars<svg stroke="currentColor" fill="currentColor"
                                                stroke-width="0" viewBox="0 0 24 24" class="arrow  ml-1 mt-1" height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="partnerships.html"><span class="h-6 w-6 py-1"><img
                                            src="icons/menu-phala-ecosystem.png" class="h-5 w-5 -mt-0.5" /></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">Phala Ecosystem<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow ml-1 mt-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                            <li class="py-1.5 px-2.5"><a
                                    class="site-nav-menu-item btn-with-arrow flex flex-row gap-2.5 w-full items-start"
                                    href="https://dune.com/phala_network/phala-analytics?utm_source=phala.network&amp;utm_medium=site-nav"><span
                                        class="h-6 w-6 py-1"></span>
                                    <div class="flex-grow w-full hover:text-[#AAF92F]">
                                        <h4 class="heading flex hText">AI Agent Contract Statistics<svg stroke="currentColor"
                                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="arrow mt-1 ml-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
                                                </path>
                                            </svg></h4>
                                        <div class="body"></div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
        <div class="flex  flex-row gap-2 px-8 pb-8 mt-[470px] z-[-1] absolute"><a title="Blog"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="blog.html"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1"
                    viewBox="0 0 16 16" class="w-8 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 0v1.5c1.148 0 2.261 0.225 3.308 0.667 1.012 0.428 1.921 1.041 2.702 1.822s1.394 1.69 1.822 2.702c0.443 1.047 0.667 2.16 0.667 3.308h1.5c0-5.523-4.477-10-10-10z">
                    </path>
                    <path d="M6 3v1.5c1.469 0 2.85 0.572 3.889 1.611s1.611 2.42 1.611 3.889h1.5c0-3.866-3.134-7-7-7z">
                    </path>
                    <path
                        d="M7.5 6l-1 1-3.5 1-3 6.5 0.396 0.396 3.638-3.638c-0.022-0.083-0.034-0.169-0.034-0.259 0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1c-0.090 0-0.176-0.012-0.259-0.034l-3.638 3.638 0.396 0.396 6.5-3 1-3.5 1-1-2.5-2.5z">
                    </path>
                </svg></a><a title="X.com"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="https://twitter.com/PhalaNetwork"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 24 24" class="w-7 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                    </path>
                </svg></a><a title="Telegram"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="https://t.me/phalanetwork"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 256 256" class="w-8 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M235.57,27.7a7,7,0,0,0-7.13-1.22L25.78,105.79a12.23,12.23,0,0,0,2.1,23.39L82,139.81V200a14,14,0,0,0,24.08,9.71l26.64-27.63,41.58,36.45a13.9,13.9,0,0,0,9.2,3.49,14.33,14.33,0,0,0,4.36-.69,13.86,13.86,0,0,0,9.34-10.17L237.82,34.57A7,7,0,0,0,235.57,27.7ZM30.05,117.37h0a.46.46,0,0,1,0-.32.51.51,0,0,1,.15-.08L189.91,54.45l-103.3,74L30.2,117.41Zm67.39,84A2,2,0,0,1,94,200V148.11l29.69,26Zm88.07,7.08a1.93,1.93,0,0,1-1.34,1.44,2,2,0,0,1-2-.4L97.64,135.34,223,45.5Z">
                    </path>
                </svg></a><a title="Discord"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="https://discord.gg/phala-network"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 16 16" class="w-8 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z">
                    </path>
                </svg></a><a title="CoinMarketCap" target="_blank"
                class="shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700 transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800"
                href="https://coinmarketcap.com/community/profile/PhalaNetwork/"><svg class="w-8 h-6"
                    viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z"
                        fill="currentColor"></path>
                </svg></a></div>
    </div>
    </>
  )
}

export default Mobile

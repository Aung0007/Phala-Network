import React from 'react'
import imgOne from '../assets/partnerships/Airstack.png'
import imgTwo from '../assets/partnerships/AwesomeQA.png'
import imgThree from '../assets/partnerships/Base.png'
import imgFive from '../assets/partnerships/DMail.png'
import imgSix from '../assets/partnerships/EasyA.png'
import imgSeven from '../assets/partnerships/Farcaster.png'
import imgEight from '../assets/partnerships/Flock.png'
import imgNine from '../assets/partnerships/GMNetwork.png'
import imgTen from '../assets/partnerships/Hackachain.png'
import imgEleven from '../assets/partnerships/Huddle01.png'
import imgTwelve from '../assets/partnerships/inDEX.png'
import imgThrtine from '../assets/partnerships/IoTEX.png'
import imgFourtin from '../assets/partnerships/Lens.png'
import imgFivtin from '../assets/partnerships/MagnetAI.png'
import imgSixtin from '../assets/partnerships/MindNetwork.png'
import imgSeventing from '../assets/partnerships/Nevermined.png'
import imgEighten from '../assets/partnerships/OnFinality.png'
import imgNinetin from '../assets/partnerships/Polkadot.png'
import imgTwentinOne from '../assets/partnerships/Polygon.png'
import imgTwentinTwo from '../assets/partnerships/sprite5e1f.png'
import imgTwentinThree from '../assets/partnerships/Sygma.png'
import imgTwentinFour from '../assets/partnerships/TheGraph.png'
import imgTwentinFive from '../assets/partnerships/Theoriq.png'
import imgTwentinSix from '../assets/partnerships/Zurf.png'


import Graph from '../assets/home/icon-access-unlimited-thegraph.png'
import Airstack from '../assets/home/icon-access-unlimited-airstack.png'
import Lens from '../assets/home/icon-access-unlimited-lens.png'

import Foundry from '../assets/home/icon-tool-foundry.png'
import Hardhat from '../assets/home/icon-tool-hardhat.png'
import Javascript from '../assets/home/icon-tool-javascript.png'
import MetaMask from '../assets/home/icon-tool-metamask.png'
import TypeScript from '../assets/home/icon-tool-typescript.png'

import Binence from '../assets/home/icon-binance.png'
import Ethereum from '../assets/home/icon-ethereum.png'
import Arbitum from '../assets/home/icon-arbitrum.png'
import Lenes from '../assets/home/icon-lens.png'
import Polygons from '../assets/home/icon-polygon.png'
import Pocadot from '../assets/home/icon-polkadot.svg'


const Highlight = () => {
  return (
   <>
    <section id="section-phat-contract-highlight"
                class="safe-viewport py-10 lg:py-32 px-5 lg:!px-16 grid grid-cols-4 lg:grid-cols-12 grid-rows-1 gap-6 border border-solid border-black-100 rounded-md bg-black-900"
            >

                <header className="row-start-1 col-start-1 col-span-full lg:pb-20">
                    <h2 className="text-3xl lg:text-6xl text-white font-black">AI-Agent Contract</h2>
                    <p className="text-xl lg:text-3xl text-white font-normal">Ship AI agents in minutes</p>
                </header>

                <article class="article row-start-2 col-span-full lg:col-start-1 lg:col-span-7 grid gap-8">
                    <h3 class="heading">Integrate with Popular LLMs and Web3 data layers</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"><a
                        href="https://dashboard.phala.network/projects/new/clone?template=thegraph-starterkit"
                        target="_blank"
                        class="flex flex-col items-center justify-center gap-2.5 py-10 lg:py-20 rounded-sm overflow-hidden bg-[#e3dfdc] group"><img
                            src={Graph} alt="The Graph"
                            class="w-1/2 group-hover:scale-105 duration-200 transition-transform" />
                        <div class="text-black-800 text-18 font-bold">The Graph</div>
                    </a><a href="https://dashboard.phala.network/projects/new/clone?template=lensapi" target="_blank"
                        class="flex flex-col items-center justify-center gap-2.5 py-10 lg:py-20 rounded-sm overflow-hidden bg-[#e3dfdc] group"><img
                                src={Lens} alt="Lens Protocol"
                                class="w-1/2 group-hover:scale-105 duration-200 transition-transform" />
                            <div class="text-black-800 text-18 font-bold">Lens Protocol</div>
                        </a><a href="https://dashboard.phala.network/projects/new/clone?template=airstack-starterkit"
                            target="_blank"
                            class="flex flex-col items-center justify-center gap-2.5 py-10 lg:py-20 rounded-sm overflow-hidden bg-[#e3dfdc] group"><img
                                src={Airstack} alt="Airstack"
                                class="w-1/2 group-hover:scale-105 duration-200 transition-transform" />
                            <div class="text-black-800 text-18 font-bold">Airstack</div>
                        </a></div>
                    <div class="self-end"><button type="button"
                        class="bg-white text-black text-center py-3 rounded-full font-bold hover:bg-[#B8B8B8]  min-w-[210px]" data-rac="">Get Early
                        Access</button>
                        <dialog class="d-modal d-modal-bottom sm:d-modal-middle">
                            <div class="d-modal-box py-14 bg-white shadow-lg border border-black-200 text-black">
                                <form class="flex flex-row justify-end absolute top-0 left-0 right-0 pt-2 pr-0"
                                    method="dialog"><button class="btn btn-sm btn-circle btn-ghost"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-black"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg></button></form>
                                <h3 class="font-bold text-2xl text-center">Contact Us</h3>
                                <div class="pt-4">
                                    <form class="flex flex-col gap-4 items-end relative p-2">
                                        <fieldset class="w-full flex flex-col lg:flex-row gap-3">
                                            <div class="relative w-full"><input type="text" placeholder="Gavin Belson"
                                                class="bg-black-50 rounded-xs px-5 py-2.5 w-full" name="name" /></div>
                                            <div class="relative w-full"><input type="email" placeholder="gavin@hooli.com"
                                                class="bg-black-50 rounded-xs px-5 py-2.5 w-full" name="email" /></div>
                                        </fieldset>
                                        <div class="relative w-full"><textarea name="message"
                                            class="bg-black-50 rounded-xs px-5 py-2.5 w-full" rows="7"
                                            placeholder="I&#x27;m gonna be asking you to say a few words. Just a bit about how much of a fan you are, dedicated to the cause, my cause, maybe lead with a joke. Be good to have you there, Richard. Securing my legacy with you at my wing. Wear pants you can kneel in."></textarea>
                                        </div>
                                        <div><button class="btn btn-primary btn-blk relative" disabled=""><span
                                            class="">Submit</span></button></div>
                                    </form>
                                </div>
                            </div>
                            <form class="d-modal-backdrop" method="dialog"><button>close</button></form>
                        </dialog>
                    </div>
                </article>

                <div class="row-start-3 col-span-full lg:row-start-2 lg:col-start-8 lg:col-span-5 flex flex-col gap-6">
                    <article class="article flex flex-col gap-8">
                        <h3 class="heading">Build with familiar tools</h3>
                        <div class="flex flex-row flex-wrap gap-4 lg:gap-6">
                            <div
                                class="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
                                <img src={Hardhat} alt="Hardhat" class="w-3/5" /></div>
                            <div
                                class="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
                                <img src={MetaMask} alt="Metamask" class="w-3/5" /></div>
                            <div
                                class="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
                                <img src={Foundry} alt="Foundry" class="w-3/5" /></div>
                            <div
                                class="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
                                <img src={Javascript} alt="Javascript" class="w-3/5" /></div>
                            <div
                                class="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
                                <img src={TypeScript} alt="Typescript" class="w-3/5" /></div>
                        </div>
                        <div class="lg:mt-5"><a
                            href="https://docs.phala.network/developers/bricks-and-blueprints/featured-blueprints"
                            class="bg-white text-black text-center py-3 rounded-full font-bold hover:bg-[#B8B8B8] px-10 min-w-[300px]"
                            target="_blank">Learn More</a></div>
                    </article>
                    <article class="article flex flex-col gap-8">
                        <h3 class="heading">Backing <em>153</em> Contracts</h3>
                        <div class="lg:mt-5"> <a class="bg-white text-black text-center py-3 rounded-full font-bold hover:bg-[#B8B8B8] px-16 min-w-[300px]"
                                href="tags/AI-Agent%20Contract.html">Explore</a></div>
                    </article>
                </div>

                <article class="article lg:row-start-3 col-span-full grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-20">
                    <div class="lg:max-w-[494px] flex flex-col items-center lg:justify-center gap-4 lg:gap-12 lg:mx-auto">
                        <h3 class="heading">Connect AI-Agent with <em>25+</em> Blockchains Instantly</h3>
                        <div class="flex flex-row flex-wrap lg:justify-evenly gap-4 lg:gap-8">
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Binence} alt="Binance"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Arbitum} alt="Arbitrum"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Polygons} alt="Polygon"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Lenes} alt="Lens"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Pocadot} alt="Polkadot"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                            <div class="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
                                <img src={Ethereum} alt="Ethereum"
                                    class="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy"
                                    decoding="async" /></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">


                        <div className=''>
                            <iframe  className='yt-lite w-full' height="275"  src="https://www.youtube.com/embed/uSY-0NxEnFY?si=_2SyuxIfug21W7cK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>

                        <div class="flex flex-row justify-center gap-2.5">
                        <a class=" hidden lg:grid text-white text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-3 rounded-full font-extrabold hover:bg-[#B8B8B8] min-w-[200px]"
                                href="tags/AI-Agent%20Contract.html">Join Agent War</a>

                                 <a class="bg-white text-black text-center py-3 rounded-full font-bold hover:bg-[#B8B8B8] min-w-[200px]"
                                href="tags/AI-Agent%20Contract.html">Learn More</a>
                                </div>
                    </div>
                </article>

                <div class="lg:row-start-4 col-span-full text-white py-10 lg:pt-20 lg:pb-14"><span
                    class="text-32 lg:text-56 font-black">Phala Ecosystem</span>
                </div>

                <div class="col-span-full grid-cols-1 flex flex-row gap-5 justify-center flex-wrap">
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-airstack" title="Airstack">
                            <img src={imgOne} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-awesomeqa" title="AwesomeQA">
                        <img src={imgTwo} alt="" />

                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-base" title="Base">
                        <img src={imgThree} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-developerdao" title="Developer DAO"></div>
                        <img src={imgFivtin} alt="" />
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-dmail" title="DMail">
                            <img src={imgFive} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-easya" title="EasyA">
                            <img src={imgSix} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-farcaster" title="Farcaster">
                            <img src={imgSeven} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-flockio" title="Flock.io">
                            <img src={imgEight} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-gmnetwork" title="GM Network">
                            <img src={imgNine} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-hackachain" title="Hackachain">
                            <img src={imgTen} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-huddle01" title="Huddle01">
                            <img src={imgEleven} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-index" title="inDEX">
                            <img src={imgTwelve} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-iotex" title="IoTEX">
                            <img src={imgThrtine} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-lens" title="Lens">
                            <img src={imgFourtin} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-magnetai" title="MagnetAI">
                            <img src={imgSixtin} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-mindnetwork" title="Mind Network">
                            <img src={imgSeventing} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-nevermined" title="Nevermined">
                            <img src={imgEighten} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-onfinality" title="OnFinality">
                            <img src={imgNinetin} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-polkadot" title="Polkadot">
                            <img src={imgThrtine} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-polygon" title="Polygon">
                            <img src={imgTwentinOne} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-pond" title="Pond">
                            <img src={imgTwentinTwo} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-sygma" title="Sygma">
                            <img src={imgTwentinThree} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-thegraph" title="The Graph">
                            <img src={imgTwentinFour} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-theoriq" title="Theoriq">
                            <img src={imgTwentinFive} alt="" />
                        </div>
                    </div>
                    <div class="partnership-logo-container">
                        <div class="partnership-logo partnership-logo-zurf" title="Zurf">
                            <img src={imgTwentinSix} alt="" />
                        </div>
                    </div>
                </div>

                <div class="col-span-full grid-cols-1 flex flex-row justify-center text-center"><a
                    class=" bg-white py-3 rounded-full font-bold hover:bg-[#B8B8B8] min-w-[200px]"
                    href="partnerships.html">Explore More</a>
                </div>


            </section>
   </>
  )
}

export default Highlight

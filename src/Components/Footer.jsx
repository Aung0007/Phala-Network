import React from 'react'
import logo from '../assets/home/logo.svg'
import Box from './Box'

const Footer = () => {
  return (
    <>
      <footer className='page-footer bg-[#1c1c1c] text-white lg:py-12 p-6 xl:py-16'>

        <div className='safe-viewport grid gap-4 grid-cols-2 auto-rows-min xl:auto-rows-fr xl:grid-cols-20 3xl:grid-cols-24'>

          <div className='col-span-1 col-start-1 row-start-1 xl:row-start-1 xl:col-start-2 xl:col-span-5 3xl:col-start-4'>

            <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Developers</h4>

            <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
              <li><a target="_blank" rel="noopener" href="https://docs.phala.network/"
                class="btn-link text-xs xl:text-base leading-4 xl:leading-6">Docs</a></li>
              <li><a className="btn-link text-xs xl:text-base leading-4 xl:leading-6" href="/changelog">Changelog</a>
              </li>
              <li><a target="_blank" rel="noopener" href="https://github.com/Phala-Network/"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">GitHub</a></li>
              <li><a target="_blank" rel="noopener"
                href="https://docs.phala.network/developers/phat-contract/builders-program"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Builders Program</a></li>
              <li><a target="_blank" rel="noopener" href="https://phat.phala.network/"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">DevTool</a></li>
              <li><a target="_blank" rel="noopener" href="https://dashboard.phala.network/?source=foot-bricks-app"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Dashboard</a></li>
              <li><a target="_blank" rel="noopener"
                href="https://docs.phala.network/developers/phat-contract/use-cases"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Use Cases</a></li>
            </ul>

            <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Templates</h4>

            <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
              <li><a target="_blank" rel="noopener"
                href="https://dashboard.phala.network/?source=footer-LensAPI-Oracle"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Phat Contract Starter Kit</a>
              </li>
              <li><a target="_blank" rel="noopener"
                href="https://dashboard.phala.network/?source=footer-LensAPI-Oracle"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">LensAPI Oracle</a></li>
              <li><a target="_blank" rel="noopener"
                href="https://dashboard.phala.network/?source=footer-LensAPI-Oracle"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">VRF Oracle</a></li>
              <li><a target="_blank" rel="noopener"
                href="https://dashboard.phala.network/?source=footer-LensAPI-Oracle"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">AirStack Starter Kit</a></li>
              <li><a target="_blank" rel="noopener"
                href="https://dashboard.phala.network/?source=footer-LensAPI-Oracle"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">The Graph Starter Kit</a></li>
            </ul>

            <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Other Products</h4>

            <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
              <li><a target="_blank" rel="noopener" href="https://subbridge.io"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">SubBridge</a></li>
              <li><a target="_blank" rel="noopener" href="https://phala.world"
                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">PhalaWorld</a></li>
            </ul>
          </div>

          <div class="col-span-1 xl:row-start-1 xl:col-start-7 xl:col-span-5 3xl:col-start-10">
                <h4 class="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Resources</h4>
                <ul class="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
                    <li><a target="_blank" rel="noopener" href="https://app.phala.network"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Phala App</a></li>
                    <li><a target="_blank" rel="noopener" href="https://docs.phala.network/"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">What is Phala Network?</a></li>
                    <li><a target="_blank" rel="noopener" href="https://docs.phala.network/developers/phat-contract"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">What is Phat Contract?</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://docs.phala.network/developers/phat-contract/bricks-and-blueprints"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">What are Templates?</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://docs.phala.network/pha-token/delegation/delegate-to-stakepool"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">What is PHA staking?</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://docs.phala.network/developers/phat-contract/pay-for-cloud-service"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Tokenomics - Utility</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://docs.phala.network/compute-providers/basic-info/worker-rewards"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Tokenomics - Earn</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://github.com/Phala-Network/Whitepaper/tree/master/pdf/phala-paper.pdf"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Whitepaper</a></li>
                    <li><a className="btn-link text-xs xl:text-base leading-4 xl:leading-6" href="/roadmap">Roadmap</a></li>
                    <li><a target="_blank" rel="noopener" href="https://docs.phala.network/compute-providers/basic-info"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Become a Compute Provider</a>
                    </li>
                    <li><a target="_blank" rel="noopener" href="https://github.com/Phala-Network/growth-program"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Ambassador Program</a></li>
                    <li><a target="_blank" rel="noopener"
                            href="https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Media Kit</a></li>
                    <li><a target="_blank" rel="noopener" href="https://wellfound.com/company/phala-network"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Career</a></li>
                </ul>
            </div>

            <div className="col-span-1 col-start-2 xl:row-start-1 xl:col-start-12 xl:col-span-5 3xl:col-start-16">
                <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Phala</h4>
                <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
                    <li><a target="_blank" rel="noopener" href="https://phala.subscan.io/"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Phala Explorer</a></li>
                    <li><a target="_blank" rel="noopener" href="https://phala.subsquare.io/"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Phala Governance</a></li>
                </ul>
                <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Khala</h4>
                <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
                    <li><a target="_blank" rel="noopener" href="https://khala.subscan.io/"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Khala Explorer</a></li>
                    <li><a target="_blank" rel="noopener" href="https://khala.subsquare.io/"
                            className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Khala Governance</a></li>
                </ul>
            </div>

            <div className="col-span-1 col-start-2 xl:row-start-1 xl:col-start-17 xl:col-span-5 3xl:col-start-21">
                <div>
                    <h4 className="uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5">Social</h4>
                    <ul className="mb-10 flex flex-col gap-1.5 xl:gap-2.5">
                        <li><a target="_blank" rel="noopener" href="https://twitter.com/PhalaNetwork"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Twitter</a></li>
                        <li><a target="_blank" rel="noopener" href="https://discord.gg/phala-network"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Discord</a></li>
                        <li><a target="_blank" rel="noopener" href="https://t.me/phalanetwork"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Telegram</a></li>
                        <li><a target="_blank" rel="noopener" href="https://www.youtube.com/@PhalaNetwork"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">YouTube</a></li>
                        <li><a target="_blank" rel="noopener" href="https://lenster.xyz/u/phatcontract"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Lenster</a></li>
                        <li><a target="_blank" rel="noopener" href="https://lenstube.xyz/channel/phatcontract.lens"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Lenstube</a></li>
                        <li><a target="_blank" rel="noopener" href="https://forum.phala.network/"
                                className="btn-link text-xs xl:text-base leading-4 xl:leading-6">Forum</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div
            class="safe-viewport mt-4 grid gap-4 grid-cols-2 auto-rows-min xl:auto-rows-fr xl:grid-cols-20 3xl:grid-cols-24">
            <div
                class="col-span-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4 flex flex-col gap-5 xl:flex-row xl:items-center justify-between">
                <img alt="Phala Logo" fetchPriority="high" width="156" height="44" decoding="async" data-nimg="1"
                    class="svg-white"  src={logo} />
                <div class="uppercase flex flex-row gap-36 text-base font-semibold"><a class="btn-link"
                        href="https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md">Responsible
                        Disclosure</a></div>
            </div>
        </div>

      </footer>

      <Box/>
        
      
    </>
  )
}

export default Footer

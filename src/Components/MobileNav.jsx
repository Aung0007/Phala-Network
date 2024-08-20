

import React, { useState } from 'react'
import '../Components/Style.css'

import { IoMdClose } from 'react-icons/io'
import { AiOutlineMenu } from "react-icons/ai";

import { motion } from 'framer-motion';

import Mobile from '../Mobile/Mobile'

const menuVariants = {
  hidden: {
    x: '100%'
  }
  ,
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    },
  },
};

const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className=' text-primary xl:hidden '>
        {/* nav open button */}
        <div onClick={() => setOpenMenu(true)} className=' text-3xl cursor-pointer'>
        <AiOutlineMenu className=' text-[#999999]' />
        </div>

        {/* menu */}
        <motion.div
          variants={menuVariants}

          initial='hidden'

          animate={openMenu ? 'show' : ""}

          className=' bg-[#333333] shadow-2xl  absolute top-0  right-0  w-full rounded-s-[40px]   h-screen z-20'>


          {/* icons */}
          <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 right-14 top-8 text-primary cursor-pointer '>
            <IoMdClose className='text-[#999999]' />
          </div>

          {/* menu list */}

         
         <Mobile/>
          
          
         
          

        </motion.div>
      </nav>
    </>
  )
}

export default MobileNav

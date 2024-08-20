import React from 'react'
import '../Animated/Anim.css'
import imgOne from '../assets/img/svg-image-41.svg'
import bgone from '../assets/img/svg-image-32.svg'
import imgTwo from '../assets/img/svg-image-22.svg'
import imgThree from '../assets/img/svg-image-23.svg'
import imgFour from '../assets/img/svg-image-14.svg'





const anim = () => {
  return (
<>
    <div className=' bg-[#232323] justify-center rounded'>
        <div className=' ml-[100px]'>
            
 <img src={bgone} width={600} alt="" />
    <img src={imgOne} width={400}  className=' absolute mt-[-180px]' alt="" />
    <img src={imgTwo} width={100}  className=' absolute mt-[-380px] ml-[530px]' alt="" />
    <img src={imgThree} width={100}  className=' absolute mt-[-260px] ml-[530px]' alt="" />
    <img src={imgThree} width={100}  className=' absolute mt-[-140px] ml-[530px]' alt="" />

    <img src={imgFour} width={140}  className=' absolute mt-[-390px] ml-[304px]' alt="" />
    <img src={imgFour} width={140}  className=' absolute mt-[-390px] ml-[110px]' alt="" />
    <img src={imgFour} width={140}  className=' absolute mt-[-390px] ml-[-60px]' alt="" />






        </div>
    </div>
</>
  )
}

export default anim

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Nav() {


  useGSAP(()=>{

    var tl = gsap.timeline();

    tl.from('.img',{
         y:-100,
         duration:.3,
         stagger:1
         

    })
    .from('.btn',{
      y:-100,
      duration:.3,
      

    })
  

  })

  



  return (
    <div className='nav w-full h-fit p-10 sm:px-40 '>
          <div className="nav-part flex justify-between ">
            <img className='img sm:h-[4vw] h-[10vw]' src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png" alt="" />
            <a className='btn h-fit  hidden md:block px-4 py-3  border-2 font-medium text-zinc-600 border-white rounded-lg bg-white hover:text-white hover:bg-transparent ' target='_blank' href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">Purchase Now</a>
          </div>
    </div>
  )
}

export default Nav
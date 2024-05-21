import React, { useRef } from 'react'
import Nav from './partials/Nav'
import Footer from './partials/Footer'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Home() {
  
    
   


  return (
    <div className='home'>
        <Nav/>

        <div className="home-part1 w-full sm:px-[8vw]   pt-10 pb-[200px]">

            <div  className="section1 w-full   ">

                <div className="flex sm:gap-20 gap-10 px-10 flex-wrap  overflow-hidden w-full sm:justify-left sm:items-start sm:flex-row items-center flex-col  ">

                    <div className="part1 text-[#EEE5FF] flex-end   text-lg font-medium w-fit flex items-top ">

                        <div className='text1  sm:text-left text-center w-[200px]'>
                            <h1 className='h1 mb-3'>Transform Your Website</h1>
                            <h1>With Motion  Art Effect</h1>
                        </div>
                    
                    </div>
                    <div className="part2  text-[#EEE5FF]   font-medium sm:text-[4.2vw] text-3xl" >
                        <div className=' sm:w-[40vw]  text-center sm:text-left flex flex-col'>
                            <h1  className='text2 leading-tight' >Attract Your Visitors Attention With Colorful <br /> <span className='h1'>Motion Art Effect</span></h1>
                            <p className='text3 text-zinc-400 tracking  text-center sm:text-left font-light sm:text-base text-base leading-tight mt-10'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
                        </div>
                    </div>
                </div>

                <div  className='trust w-full text-center text-[#EEE5FF] text-xl sm:2xl py-10 sm:p-20'>
                    <h2>Trusted by thousands of users around the world</h2>
                </div>

                <div className="rate w-full flex justify-center sm:justify-between gap-[10vw] flex-wrap ">
                   
                    <div className="part w-fit flex items-center   gap-4">
                        <img className='' src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png' alt="" />
                        <h1>
                            <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                            <p className='text-zinc-300 mt-2'>4.5 Score, 9 Reviews</p>
                        </h1>
                    </div>
                   
                    <div className="part w-fit flex items-center gap-4">
                        <img className='' src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png' alt="" />
                        <h1>
                            <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                            <p className='text-zinc-300 mt-2'>4.5 Score, 9 Reviews</p>
                        </h1>
                    </div>
                   
                    <div className="part fit flex items-center gap-4">
                        <img className='' src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png' alt="" />
                        <h1>
                            <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                            <p className='text-zinc-300 mt-2'>4.5 Score, 9 Reviews</p>
                        </h1>
                    </div>

                </div>
               
            </div>


            <div className="section2 w-full flex flex-wrap  justify-center sm:justify-between px-3 text-center sm:mt-24 sm:text-left gap-10 py-20">
                <div className="part1 sm:w-[65%] flex flex-col  sm:items-left  ">
                    <h1 className='text-[#EEE5FF] leading-tight  font-medium sm:text-[3vw] text-3xl '>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
                    <p className='text-zinc-400 tracking  text-center sm:text-left font-light sm:text-xl text-[16px] leading-tight mt-5'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements. </p>
                    <a className='btn1 sm:ml-0 ml-16  w-fit  px-[2vw] py-3  text-xl font-medium text-[#EEE5FF] border-white rounded-3xl mt-5 flex items-center gap-2  ' href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target='_blank'>Purchase From Envato <i className="ri-arrow-right-line text-3xl"></i> </a>
                </div>

                <div className="part2 ">
                  <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png" alt="" />

                </div>
            </div>


            <div className="section3 w-full sm:p-0 p-3">
                <div className='w-full  flex justify-center  items-center'>
                  <h1 className='text-[#EEE5FF] font-medium sm:text-[3vw] text-3xl leading-tight  sm:w-[50vw]  text-center '>Apply On Any Section Or Enable For Whole Page</h1>
                </div>

                <div className="part1 pt-20">
                     
                     <div className="box-container flex flex-wrap gap-[1vw]">
                            <div className="box h-fit bg-[#100922] sm:w-[40vw] p-10 border-2 border-zinc-700  rounded-3xl ">
                                <h1 className='text-[#EEE5FF] font-medium  text-2xl leading-tight'>Apply On Section</h1>
                                <p className='text-zinc-400 tracking  sm:text-left font-light sm:text-lg text-[16px] leading-tight mt-5 mb-5'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png" alt="" />
                            </div>
                            <div className="box h-fit mt-12 sm:w-[40vw] p-10 border-2 border-zinc-700  rounded-3xl ">
                                <h1 className='text-[#EEE5FF] font-medium  text-2xl leading-tight'>Apply On Page</h1>
                                <p className='text-zinc-400 tracking  sm:text-left font-light sm:text-lg text-[16px] leading-tight mt-5 mb-5'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png" alt="" />
                            </div>
                     </div>
                   
                  

                </div>

                <div className="part2 h-fit mt-10 sm:mt-32 w-full ">
                      
                    <div className="box p-10 border-2 border-zinc-700  rounded-3xl flex flex-col items-center  ">
                         <h1 className='text-[#EEE5FF] font-medium  text-2xl leading-tight'>Supported by All Popular Browsers</h1>
                        <p className='text-zinc-400 tracking w-[350px]   font-light sm:text-lg text-[16px] leading-tight text-center p-2 mt-5 mb-5'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png" alt="" />

                    </div>
                       
                </div>
                   
            </div>


            <div className="section4 pt-10 ">
                <div className="part1 flex items-center flex-col sm:p-20">
                  <h1 className='text-[#EEE5FF] font-medium sm:text-[2vw] text-3xl leading-tight  sm:w-[50vw]  text-center '>An All-Round Plugin With Powerful Features</h1>
                  <p className='text-zinc-400 tracking sm:w-[550px]   font-light sm:text-lg text-[16px] leading-tight text-center p-2 mt-5 mb-5'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                </div>

                <div className="part2 flex flex-wrap gap-2 justify-center ">
                    <div className="box sm:w-[30%]  p-10 flex flex-col  border-2 border-zinc-700  rounded-3xl">
                        <img className=' w-1/2' src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png" alt="" />
                        <h1 className='text-[#EEE5FF] font-medium sm:text-[2vw] text-2xl leading-tight '>Light Weight</h1>
                        <p className='text-zinc-400 tracking sm:w-fit   font-light sm:text-lg text-[14px] leading-tight  mt-5'>Motion Art for Elementor is designed to be lightweight.</p>
                        
                    </div>
                    <div className="box sm:w-[30%]  p-10 flex flex-col  border-2 border-zinc-700  rounded-3xl">
                        <img className=' w-1/2 ' src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png" alt="" />
                        <h1 className='text-[#EEE5FF] font-medium sm:text-[2vw] text-2xl leading-tight '>100% Responsive</h1>
                        <p className='text-zinc-400 tracking sm:w-fit   font-light sm:text-lg text-[14px]   mt-5'>Create a consistent visual experience across all devices.</p>
                        
                    </div>
                    <div className="box sm:w-[30%]  p-10 flex flex-col  border-2 border-zinc-700  rounded-3xl">
                        <img className=' w-1/2' src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png" alt="" />
                        <h1 className='text-[#EEE5FF] font-medium sm:text-[2vw] text-2xl leading-tight  '>User Friendly Interface</h1>
                        <p className='text-zinc-400 tracking sm:w-fit   font-light sm:text-lg text-[14px]   mt-5'>Ensure a smooth experience for both <br /> applicants and administrators.</p>
                        
                    </div>
                </div>
            </div>


        </div>

       <Footer/>
    </div>
  )
}

export default Home
import React from 'react'

function Footer() {
  return (
    <div className='footer text-sm sm:text-base w-full text-zinc-800 flex sm:flex-row-reverse sm:flex-row flex-col items-center gap-3 py-2 justify-between sm:px-20 sm:py-5'>
          <div className='.part1 sm:text-zinc-300 text-zinc-800  flex gap-10'>
            <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target='_blank'>Documentation</a>
            <a href="https://support.qodematrix.com/" target='_blank'>Support</a>
        </div>
        <p className=''>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      
    </div>
  )
}

export default Footer
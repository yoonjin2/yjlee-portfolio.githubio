import React from 'react'
import {motion} from 'framer-motion'




export default function ProjectCards1() {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>

        
                    <a href="https://github.com/yoonjin2/andongsoju" className=' cursor-pointer'>
                        <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true}}
                        className=' max-h-72'
                        src="https://camo.githubusercontent.com/ed4887bc39712103df59e57dd940d324b6f8ee1bdf1fb9030032000edf02e9a6/68747470733a2f2f696d672e64616e6177612e636f6d2f70726f645f696d672f3530303030302f3734302f3239312f696d672f353239313734305f312e6a70673f736872696e6b3d3333303a333330265f763d3230313830383330313432313333" alt="" />
                    </a>
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'> AndongSoju(Buffered Device) </span>{' '} 
                        </h4>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                    This is Sortable FIFO Device Driver for Linux. <br/> When someone want to sort items in size-based comparing algorithm,
                    <br/>

                    this could be a good choice.
                    </p>
                </article>

  )
}

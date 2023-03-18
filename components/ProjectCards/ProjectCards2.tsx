import React from 'react'
import {motion} from 'framer-motion'



export default function ProjectCards1() {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>

            
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 1.2}}
                    viewport={{once: true}}
                    className=' max-h-72'
                    src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960" alt="" />
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'> Car remote </span>{' '} 
                        </h4>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                        This is my second project, With my brothers of Cloud Computing Team. <br/> You can remotely control the cars.
                        Remote cars are buffered by tunneling device, 
                        <br/>
                        and packets are communicated as pod-to-pod Communication, by TCP.
                        <br/>
                        Cars should be registered into the Kubernetes cluster.
                        <br/>
                        Also, we can monitor its status by Front-end Application made my laboratory bros.
                        <br/>
                        It was a part of EdgeCPS project(By ETRI).
                    </p>
                </article>

  )
}

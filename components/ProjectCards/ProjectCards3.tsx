import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

export default function ProjectCards1({}: Props) {
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
                    src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="" />
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <a href="https://github.com/yoonjin2/miney">
                            <h4 className=' text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'> Minecraft Server Container Generator </span>{' '} 
                            </h4>
                        </a>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                    This is LXD Container generator for Minecraft-(Bedrock Server).
                    <br/>
                    Username and password should be registered. Backend prototype has released, and it stores userdatas in MongoDB. It can allocate, delete, sync containers.
                    </p>
        </article>
            
  )
}

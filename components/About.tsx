import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1,}}
        transition={{duration:1.5}}
        className=' h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}
        src="https://avatars.githubusercontent.com/u/20538540?s=400&u=98b4081f9ce12ecd77e5dac7f4989579601eac3a&v=4"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-t-3xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        
        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className=' text-4xl justify-center text-center font-semibold'>Here is a <span className=' underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p className=' text-sm'>I was born in the year 2002. I Love Computer Science. Tea Lover, and Linux/OSS Lover. Interested in Philosophy, I always had to think about myself,
            with some kinda personal reason, but that helped me to recover faster and faster.
            I Welcome any contacts for me, Please mail me if you are interested in me.</p>
        </div>
    </motion.div>
  )
}

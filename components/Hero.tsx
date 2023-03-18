// import { motion } from 'framer-motion'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            "Hi My name is Yunjin Lee",
            "Which is a Network/Cloud Computing/Embedded Linux/RTOS Engineer", 
            "I love Coffee/Tea as a Programmer"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className=' h-screen flex flex-col  items-center justify-center text-center overflow-hidden '>
        <BackgroundCircle />
        <img 
        className='relative rounded-t-full top-12 h-[210px] w-[210px] mx-auto object-cover z-1'
        src="https://avatars.githubusercontent.com/u/20538540?s=400&u=98b4081f9ce12ecd77e5dac7f4989579601eac3a&v=4" alt="myImg" 
        />
        <div  className='z-20 relative top-24'>
            <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className=' pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skiills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

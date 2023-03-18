import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const images = [
    {
        title: 'img1',
        src : 'https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-as-complement-to-design-gear-computer-logo-icon-design-125299183.jpg'},

]
const miniIcons = [
    {src: "https://www.svgrepo.com/show/303251/mysql-logo.svg"},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'},



]

export default function ExperienceCard({}: Props) {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>


            {images.map((card, index) => (
                <div key={index}>
                    <motion.img
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y:0}}
                        viewport={{once: true}}
                        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                         src={card.src} 
                    />
                </div>
            ))}     
       

        <div className=' px-0 md:px-10 overflow-y-scroll'>
            <h4 className='text-4xl font-light'>Team Member of RESL </h4>
            <p className=' font-bold text-2xl mt-1'>Projects</p>
            <div className=' flex space-x-2 my-2'>
                {miniIcons.map((image, index) => (
                    <img key={index} src={image.src} 
                    className=' h-10 w-10 rounded-full' />
                    
                ))}
            </div>
            <p className=' uppercase py-5 text-gray-300'> 2022.09-now</p>

            <ul className=' list-disc space-y-1 text-lg'>
                <li> Working on RPL(Routing Protocol for Low-Power, Lossy Networks) <br />  </li>
            </ul>
        </div>
    </article>
  )
}

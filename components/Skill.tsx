import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft ?: boolean;
}

const Urls = [
    {src: "https://www.svgrepo.com/show/303251/mysql-logo.svg"},
    {src: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'},
    {src: 'https://img.icons8.com/color/512/mongodb.png'},
    {src: 'https://1000logos.net/wp-content/uploads/2017/03/Symbol-Linux.jpg'},
    {src: 'https://www.nixsolutions.com/uploads/2020/07/Golang.png'},
    {src: 'https://softwareengineeringdaily.com/wp-content/uploads/2019/01/Kubernetes_New.png'},
    {src: 'https://helm.sh/img/helm.svg'},
    {src: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'},
    {src: 'https://camo.githubusercontent.com/3abbd2b61fcb74805b2b48e41e2fead897322c39dab533de0231e13ac18e968b/68747470733a2f2f6c696e7578636f6e7461696e6572732e6f72672f7374617469632f696d672f636f6e7461696e6572732e706e67'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/2560px-Gnu-bash-logo.svg.png'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'},


]

export default function Skill({directionLeft}: Props) {
  return (
    <div className=' group relative m-20 p-0 left-full flex cursor-pointer w-screen overflow-hidden'>
        <div className='grid grid-cols-5 gap-5'>
        
        {Urls.map((image, index) => (
                    <motion.img key={index} src={image.src} 
                    initial={{
                        x: directionLeft? -200 :200,
                    }}
                    transition={{duration: 1}}
                    whileInView={ {opacity:1, x:0}}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter  transition duration-300 ease-in-out'
                    />
                    
                ))}
                </div>

        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full z-0' >
            <div className=' flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div> */}
    </div>
  )
}

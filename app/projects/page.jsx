"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { BsArrowUpRight, BsGithub, BsYoutube } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import SliderButtons from '@/components/SliderButtons';

const projects = [
    {
        num: '01',
        title: 'Chess',
        description: 'Fully functional chess game built in C++. A two-player or single-player game against an AI of 4 different difficulties is playable through the command line',
        stack: [{ name: "C++" }, { name: "Makefile" }, { name: "X11" }  ],
        image: '/assets/projects/thumb1.png',
        demo: "",
        github: "",
    },
    {
        num: '02',
        title: 'Tower of Hanoi',
        description: 'Interactive Tower of Hanoi game built using the Unity 3D game engine (incomplete for now!).',
        stack: [{ name: "C#" }, { name: "Unity 3D" } ],
        image: '/assets/projects/thumb2.png',
        demo: "",
        github: "",
    },
    /*
    {
        num: '03',
        title: 'Weather App',
        description: 'Lorem ipsum dolor',
        stack: [{ name: "React.js" }, { name: "Tailwind.css" } ],
        image: '/assets/projects/thumb3.png',
        demo: "",
        github: "",
    },
    */
]

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 1, duration: 0.4, ease: "easeIn"} }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.title} project
                            </h2>
                            {/* description */}
                            <p className='text-white/60'>
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* project demo video */}
                                <Link href={project.demo}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                {/*<BsArrowUpRight />*/}
                                                <BsYoutube className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>demo video</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* project github link */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                {/*<BsArrowUpRight />*/}
                                                <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            {/* image */}
                                            <div className='relative w-full h-full'>
                                                <Image src={project.image} fill className='object-contain' alt='' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <SliderButtons 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
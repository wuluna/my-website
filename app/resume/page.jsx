"use client";

import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { TbBrandCoinbase } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

// experience data
const experience = {
    //icon: '/'
    title: 'My experience',
    description: 'Lorem ipsum dolor',
    items: [
        {
            company: "Orion Health",
            position: "Associate Implementation Consultant",
            duration: "Sep 2024 - Dec 2024"
        },
        {
            company: "MChapter Board Game Cafe",
            position: "Waitress",
            duration: "May 2023 - Aug 2023"
        },
        {
            company: "Presotea",
            position: "Barista/Cashier",
            duration: "Aug 2022 - Dec 2022"
        }
    ]
}

// education data
const education = {
    title: "My education",
    description: 'Lorem ipsum dolor',
    items: [
        {
            institution: "University of Waterloo",
            degree: "Bachelors of Computer Science + Bioinformatics Specialization",
            duration: "Sep 2023 - present"
        },
        {
            institution: "Vincent Massey Secondary School",
            degree: "Ontario Secondary School Diploma",
            duration: "Sep 2019 - Jun 2023"
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: 'Lorem ipsum dolor',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <TbBrandCoinbase />,
            name: "C/C++",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
    ]
}

// about data
const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Luna Wu",
        },
        {
            fieldName: "Email",
            fieldValue: "lunawu62@gmail.com",
        },
        {
            fieldName: "Location",
            fieldValue: "Waterloo, Ontario",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Mandarin",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience"  className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                {/*
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                */}
                                <ScrollArea>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* education */}
                        <TabsContent value="education"  className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                {/*
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                */}
                                <ScrollArea>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' ///////////////// h-[184px]
                                                >
                                                    <span className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* skills */}
                        <TabsContent value="skills"  className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>
                                        {skills.title}
                                    </h3>
                                    {/*
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                    */}
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>


                        {/* about me */}
                        <TabsContent value="about"  className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>
                                    {about.title}
                                </h3>
                                
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {/* about.description */}
                                </p>
                                
                            </div>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume
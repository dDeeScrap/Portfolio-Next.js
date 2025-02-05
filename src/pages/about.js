import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import Animated from '@/components/AnimatedText'


const AnimatedNumber = ({value}) =>{
const ref = useRef(null)

const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue, {duration:500})
const isInView = useInView(ref, {once:true})

useEffect(() => {
    if(isInView){
        motionValue.set(value)
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0)<= value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
}, [springValue, value])


    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>{`FisiiN'z | About Page`}</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>

                <Animated text="Passion Fuels Purpose !" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>

                        <h2 className='mb-16 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='my-10 font-medium'>
                        {`- Hi, I'm Hafiseen Ali, a junior web developer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients' visions to life.`}</p>

                        <p className='my-16 font-medium'>
                        {`- Although I did't graduated in facalty that are related to this position, also I don't have any experience as a programer or developer, but I like
                        technology. so it leads me to be interested in working in this position.`}</p> 

                        <p className='my-16 font-medium'>
                        {`- I start to learn via websites and Youtube. I practice making a mini project. Of course, I will still be developing in any project. I believe logical thinking, analytical skills and
                        good responsibility are my qualifications`}</p>

                        <p className='mt-10 font-medium'>
                        {`- I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills, passion and do my best
                        for the most benefit to the company`}
                        </p>

                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                    xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt='Hafiseen' className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center pt-8 xl:items-center'>
                            <span className='inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-1xl'>
                                <AnimatedNumber value={6}/>+ Month
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xm:text-base xs:text-sm'>{`self-Taught Experiences`}</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center pt-8 '>
                            <span className='inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-1xl'>
                                <AnimatedNumber value={640}/>
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xm:text-base xs:text-sm'>{`TOEIC score`}</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center pt-8 '>
                            <span className='inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-1xl'>
                                <AnimatedNumber value={6}/>+ (Mini)
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg xm:text-base xs:text-sm'>{`Projects Completed`}</h2>
                        </div>
                    </div>

                </div>
            <Skills />   
            </Layout>
        </main>
    </>
  )
}

export default about
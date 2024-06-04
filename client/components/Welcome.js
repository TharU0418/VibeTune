'use client';
import React, { useRef } from 'react'
import styles from '../style'
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/util/motion';
import Link from 'next/link';

function Welcome() {
  return (
   <>
        {/* <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className='relative w-full md:-mt[20px -mt[12px]'
                >
                    <img
                        src='music.png'
                        alt='Welcome 01'
                        className="w-auto h-[380px] object-contain ml-0"
                    />
                </motion.div>
            </motion.div>

            </section> */}
            <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative`}
    >
         <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className='relative w-full md:-mt[20px -mt[12px]'
                >
                    <img
                        src='music.png'
                        alt='Welcome 01'
                        className="w-auto h-[320px] object-contain ml-0"
                    />
                </motion.div>
        
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='relative w-full md:-mt[20px -mt[12px]'
                >
                                <h2 className="text-[120px] text-white transform absolute top-[40%] left-[30%]">VibeTune</h2>

                </motion.div>

        <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className='relative w-full md:-mt-[20px] -mt-[12px]'
        >
            <img
                src='movie.png'
                alt='Welcome 01'
                className="w-auto h-[320px] object-contain ml-auto"
            />
        </motion.div>
    </motion.div>
</section>

       
       {/* <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
            <motion.div
                variants={fadeIn('left', 'tween', 0.8, 1)}
               // className='relative w-full md:-mt[20px -mt[12px]'
            >
                <p className="bg-blue-500 border-4 border-black text-white p-8 text-center" style={{ marginTop: '10px',backgroundColor:'#172554',opacity:'0.8',width:'88%' }}>                Discover the perfect soundtrack or movie to match your current mood with our innovative platform. 
                    Utilizing advanced content-based recommendation algorithms, we analyze your preferences and emotional 
                    state to curate personalized suggestions. Whether you're feeling joy, sadness, anticipation, or any other emotion, 
                    our system leverages metadata such as genres, actors, and plot summaries to find the ideal entertainment that resonates with you. 
                    Our approach combines elements of sentiment analysis and machine learning to ensure that every recommendation is tailored 
                    to enhance your viewing or listening experience. Join us for a deeply personal and emotionally connected journey through 
                    the world of movies and music.
                </p>
            </motion.div>
        </section> */}


   </>
  )
}

export default Welcome
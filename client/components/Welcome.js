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
                    className="responsive-img"
                    //style={{ width: 'auto', height: '320px', objectFit: 'contain', marginLeft: '0' }}
                    />
            </motion.div>
        
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='relative w-full md:-mt[20px -mt[12px]'
            >
                <h2 className="welcomeh2">VibeTune</h2>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='relative w-full md:-mt-[20px] -mt-[12px]'
            >
                <img
                    src='movie.png'
                    alt='Welcome 01'
                    className="responsive-img2"
                    //className="w-auto h-[320px] object-contain ml-auto"
                />
            </motion.div>
        </motion.div>
    </section>

   </>
  )
}

export default Welcome
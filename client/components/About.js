'use client';
import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/util/motion';

function About() {
  return (
   <>
    <section>
       <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative`}
    >
            <motion.div
                variants={slideIn('left', 'tween', 0.8, 2)}
               className='relative w-full md:-mt[20px -mt[12px]'
            >
                <div  style={{marginTop:'60px', marginLeft:'80px'}}>
                <p className="bg-blue-500 border-4 border-black text-white p-8 text-center" style={{ marginTop: '10px',backgroundColor:'#172554',opacity:'0.6',width:'92%',borderRadius:'20px' }}>               
                 Discover the perfect soundtrack or movie to match your current mood with our innovative platform. 
                    Utilizing advanced content-based recommendation algorithms, we analyze your preferences and emotional 
                    state to curate personalized suggestions. Whether you're feeling joy, sadness, anticipation, or any other emotion, 
                    our system leverages metadata such as genres, actors, and plot summaries to find the ideal entertainment that resonates with you. 
                    Our approach combines elements of sentiment analysis and machine learning to ensure that every recommendation is tailored 
                    to enhance your viewing or listening experience. Join us for a deeply personal and emotionally connected journey through 
                    the world of movies and music.
                </p>
                </div>
            </motion.div>
            </motion.div>
        </section>

       

   </>
  )
}

export default About
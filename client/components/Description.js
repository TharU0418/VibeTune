'use client';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/util/motion';
import styles from '../style'

function Description() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col relative`}
>
        <div style={{display:'flex', flexDirection:'row', marginTop:'40px', marginLeft:'80px'}}>
            <div style={{backgroundColor:'#93c5fd', padding:'40px',width:'40%',marginLeft:'20px', height:'600px',borderRadius:'20px'}}>

                <h2 style={{color:'black', fontSize:'34px',fontWeight:'600', textAlign:'center'}}>MUSIC RECOMMENDER</h2>

                <h6 style={{color:'black', fontSize:'20px',marginTop:'10px',textAlign:'center'}}> - Find a music to change your mood - </h6>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='relative w-full md:-mt[20px -mt[12px]'
                >
                    <p style={{textAlign:'center', marginTop:'20px'}}>                
                    Discover the perfect soundtrack or movie to match your current mood with our innovative platform. 
                    Utilizing advanced content-based recommendation algorithms, we analyze your preferences and emotional 
                    state to curate personalized suggestions. Whether you're feeling joy, sadness, anticipation, or any other emotion, 
                    our system leverages metadata such as genres, actors, and plot summaries to find the ideal entertainment that resonates with you. 
                    Our approach combines elements of sentiment analysis and machine learning to ensure that every recommendation is tailored 
                    to enhance your viewing or listening experience. Join us for a deeply personal and emotionally connected journey through 
                    the world of movies and music.
                </p>
                </motion.div>

                <Link href={"/music"}>
                    <button style={{backgroundColor:'white',color:'blue', fontSize:'20px',padding:'10px',marginTop:'40px', marginBottom:'40px',position:'relative', left:'30%'}}>
                        Music vibeTune
                    </button>
                </Link>
            </div>

            <div style={{}}>
                {/* <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex flex-col relative`}
                > */}
                    <motion.div
                        variants={slideIn('right', 'tween', 0.4, 2)}
                        className='relative w-full md:-mt[20px -mt[12px]'
                    >
                        <img
                            src='music.png'
                            alt='Welcome 01'
                            className="w-auto h-[400px] object-contain ml-0 relative top-[60%] left-[50%]"
                        />
                    </motion.div>
                {/* </motion.div> */}
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'row', marginTop:'40px', marginLeft:'80px'}}>

            <div style={{}}>
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
                            src='movie.png'
                            alt='Welcome 01'
                            className="w-auto h-[500px] object-contain ml-0 relative top-[60%] left-[20%]"
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            <div style={{backgroundColor:'#93c5fd', padding:'40px',width:'40%', height:'600px',borderRadius:'20px', position:'relative', left:'20%'}}>

                <h2 style={{color:'black', fontSize:'34px',fontWeight:'600', textAlign:'center'}}>MOVIE RECOMMENDER</h2>

                <h6 style={{color:'black', fontSize:'20px',marginTop:'10px',textAlign:'center'}}> - Find a movie to change your mood - </h6>

                <motion.div
                    variants={fadeIn('right', 'tween', 0.4, 2)}
                    className='relative w-full md:-mt[20px -mt[12px]'
                >
                    <p style={{textAlign:'center', marginTop:'20px'}}>                
                    Discover the perfect soundtrack or movie to match your current mood with our innovative platform. 
                    Utilizing advanced content-based recommendation algorithms, we analyze your preferences and emotional 
                    state to curate personalized suggestions. Whether you're feeling joy, sadness, anticipation, or any other emotion, 
                    our system leverages metadata such as genres, actors, and plot summaries to find the ideal entertainment that resonates with you. 
                    Our approach combines elements of sentiment analysis and machine learning to ensure that every recommendation is tailored 
                    to enhance your viewing or listening experience. Join us for a deeply personal and emotionally connected journey through 
                    the world of movies and music.
                </p>
                </motion.div>

                <Link href={"/movie"}>
                    <button style={{backgroundColor:'white',color:'blue', fontSize:'20px',padding:'10px',marginTop:'40px', marginBottom:'40px',position:'relative', left:'30%'}}>
                        Movie vibeTune
                    </button>
                </Link>
            </div>

            
        </div>
        </motion.div>

    </section>
  )
}

export default Description
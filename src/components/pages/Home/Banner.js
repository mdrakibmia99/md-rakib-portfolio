import { motion } from "framer-motion"
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero mb-32" >
            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='mask mask-hexagon max-w-sm mb-12 lg:mb-0'
                >
                    <img src="/images/rakib.png" alt='me' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl'
                >
                    <h1 className="text-5xl font-semibold mb-5">I am Rakib!</h1>
                    <div className="text-3xl leading-relaxed mb-5">Front-end Web Developer With Expertise on
                        <span className='font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <a href="https://drive.google.com/u/0/uc?id=14AwRNQ28vvH4u936eQ4DNH85PRV8nv--&export=download" target="_blank" className="btn btn-primary">Download Resume</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
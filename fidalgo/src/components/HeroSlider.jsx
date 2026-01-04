import React, { useEffect, useState } from 'react'
import img1 from '../assets/slider-1.jpg'
import img2 from '../assets/slider-2.jpg'
import img3 from '../assets/slider-3.jpg'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import star from '../assets/star-element.svg'

const heroSlides = [
    {
        id : 1,
        image : img1,
        head : 'Serving Since 1995',
        title : 'Delightful Experience',
        des : 'A taste of perfection in every dish - fine dinig with a modern twist.'
    },
    {
        id : 2,
        image : img2,
        head : 'Delicious Taste in City',
        title : 'Taste the tradition',
        des : 'A taste of perfection in every dish - fine dinig with a modern twist.'
    },
    {
        id : 3,
        image : img3,
        head : 'Traditional Taste',
        title : 'Savory every Bite',
        des : 'A taste of perfection in every dish - fine dinig with a modern twist.'

    }
]
const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    //Auto Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroSlides.length) 
        }, 10000)
        return () => clearInterval(timer) 
    }, [heroSlides.length])

  return (
    <div className="min-h-screen relative top-0  overflow-hidden">
      <Navbar />
      <AnimatePresence>
        <motion.div
          key={index}
          className="inset-0 absolute bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlides[index].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: [1, 1.08] }}
          exit={{ opacity: 0, scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            opacity: { duration: 1 },
            scale: {
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {/* <div className='absolute inset-0 bg-black/90'/> */}
          <div className="relative z-10 min-h-screen flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white flex items-center justify-center flex-col"
            >
              <h1 className="text-2xl uppercase text-[#e6b15f] tracking-widest font-urbanist">
                {heroSlides[index].head}
              </h1>
              <h2 className="font-fraunces italic leading-snug  uppercase text-6xl font-stretch-50% mb-3">
                {heroSlides[index].title}
              </h2>
              <p className="text-[#e2dddc] font-urbanist tracking-widest text-xl">
                {heroSlides[index].des}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="absolute top-1/2 left-5 text-white before:h-15 before:w-0.5 before:absolute before:rounded-full before:-top-18 before:left-3 before:bg-[#e6b15f] after:h-15 after:w-0.5 after:absolute after:rounded-full after:top-34 after:left-3 after:bg-[#e6b15f] ">
        <p className='rotate-270 tracking-widest cursor-pointer hover:text-[#e6b15f] transition-all duration-200'>YT</p>
        <img className="h-4 m-1" src={star} alt="Star" />
        <p className='rotate-270 cursor-pointer hover:text-[#e6b15f] transition-all duration-200'>IN</p>
        <img className="h-4 m-1" src={star} alt="Star" />
        <p className='rotate-270 cursor-pointer hover:text-[#e6b15f] transition-all duration-200'>FB</p>
      </p>
    </div>
  );
}

export default HeroSlider
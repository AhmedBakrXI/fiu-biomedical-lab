import LabVideo from '../assets/lab.mp4'

import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import Header from '../components/Header'


const AboutUs = () => {
    return (
        <>
            <Header />
            <main className="h-screen w-full bg-linear-to-br from-primary to-secondary flex flex-col items-center justify-center md:justify-start px-8 md:px-16 gap-4">
                <motion.h1 className='text-accent text-2xl text-center md:text-left md:text-5xl font-medium mt-0 mb-4 md:mb-32 md:mt-32'
                    initial={{ opacity: 0.5, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Welcome to FIU Biomedical Engineering Lab
                </motion.h1>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <motion.div
                        initial={{ opacity: 0.5, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className='md:flex-1'
                    >
                        <p className='text-primary-foreground text-lg md:text-3xl text-center md:text-left'>
                            We are dedicated to advancing healthcare through innovative research and cutting-edge technology. Our team of passionate engineers and scientists work tirelessly to develop solutions that improve patient outcomes and enhance the quality of life.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.5, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className='md:flex-1 mt-8 mb-8 md:mb-0 md:mt-0 flex items-center justify-center'
                    >
                        <video controls className="w-full md:w-3/4 h-auto">
                            <source src={LabVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <img src={Logo} alt="FIU BME Lab Logo" /> */}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutUs

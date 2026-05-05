import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="w-full h-screen flex items-center justify-center">
                <div className="text-center">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold text-primary mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to the FIU BME Lab
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-secondary mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Advancing Biomedical Engineering Research and Innovation
                    </motion.p>
                    <motion.a 
                        href="/about" 
                        className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Learn More
                    </motion.a>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home
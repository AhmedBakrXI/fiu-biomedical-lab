import Footer from "../components/Footer";
import Header from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineMailOutline } from 'react-icons/md';

const LocationSection = () => {
    return (
        <section className='h-auto md:hidden flex bg-linear-to-tr from-primary to-secondary flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 lg:px-32 gap-12'>
            {/* Info Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='flex-1 flex flex-col items-start justify-center gap-8'
            >
                <h1 className='text-accent text-3xl font-bold mb-4'>
                    Where to find us
                </h1>

                <div className='flex items-start gap-4'>
                    <SlLocationPin className='text-accent w-8 h-8' />
                    <p className='text-white text-sm text-left'>
                        College of Engineering and Computing, EC 3140,
                        <br />
                        Florida International University
                        <br />
                        Miami, FL 33174
                    </p>
                </div>

                <div className='flex items-start gap-4'>
                    <MdOutlineMailOutline className='text-accent w-8 h-8' />
                    <p className='text-white text-lg'>
                        anprasad@fiu.edu
                    </p>
                </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='flex-1 w-full h-[24rem]'
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2000.020088928727!2d-80.367822!3d25.7699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b92ab588fbd9%3A0x240f4f920785d1cf!2s10555%20W%20Flagler%20St%2C%20Miami%2C%20FL%2033174!5e0!3m2!1sen!2sus!4v1778004247140!5m2!1sen!2sus"
                    className='w-full h-full rounded-xl shadow-lg'
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </motion.div>
        </section>
    )
}

// 1. Define the validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form Data:", data);
        alert("Message sent successfully!");
    };

    // Reusable Tailwind classes to mimic Shadcn
    const labelStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
    const inputStyles = "flex h-10 w-full rounded-xl border border-secondary px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    const errorStyles = "text-sm font-medium text-red-500";

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <div className="mb-0 text-center">
                <h2 className="text-3xl font-semibold text-primary">Contact Us</h2>
                <p className="text-secondary">Have questions or want to collaborate? Send us a message!</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="h-auto w-full gap-4 flex flex-col justify-center p-2 md:p-4">
                {/* Name Field */}
                {/* <div className="space-y-2">
                    <label className={labelStyles} htmlFor="name">Name</label>
                    <input
                        {...register("name")}
                        id="name"
                        placeholder="John Doe"
                        className={inputStyles}
                    />
                    {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                </div> */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="w-full">
                        <label className={labelStyles} htmlFor="name">First Name</label>
                        <input
                            {...register("name")}
                            id="name"
                            placeholder="John Doe"
                            className={inputStyles}
                        />
                        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                    </div>
                    <div className="w-full">
                        <label className={labelStyles} htmlFor="name">Last Name</label>
                        <input
                            {...register("name")}
                            id="name"
                            placeholder="John Doe"
                            className={inputStyles}
                        />
                        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                    </div>

                </div>


                {/* Email Field */}
                <div className="space-y-2">
                    <label className={labelStyles} htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={inputStyles}
                    />
                    {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label className={labelStyles} htmlFor="message">Message</label>
                    <textarea
                        {...register("message")}
                        id="message"
                        rows={4}
                        placeholder="How can we help?"
                        className={`${inputStyles} h-auto`}
                    />
                    {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 h-12"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
            <div className="md:flex md:flex-row w-full items-start justify-evenly gap-4 mt-0 pt-4 hidden border-t-2">
                <div className='flex items-start gap-4'>
                    <SlLocationPin className='text-accent size-6' />
                    <p className='text-left'>
                        College of Engineering and Computing, EC 3140,
                        <br />
                        Florida International University
                        <br />
                        Miami, FL 33174
                    </p>
                </div>
                <div className='flex items-start gap-4'>
                    <MdOutlineMailOutline className='text-accent size-6' />
                    <p className='text-left'>
                        anprasad@fiu.edu
                    </p>
                </div>

            </div>
        </div>
    );
}

const ContactCard = () => {
    return (
        <Card className="bg-primary-foreground text-primary shadow-lg h-auto w-full md:w-3/4 p-0">
            <CardContent className="flex flex-col md:flex-row justify-center items-center gap-0 w-full h-full p-0">
                <div className="relative h-full w-1/2 hidden md:flex overflow-hidden">
                    {/* 1. The Map (Background Layer) */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2000.020088928727!2d-80.367822!3d25.7699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b92ab588fbd9%3A0x240f4f920785d1cf!2s10555%20W%20Flagler%20St%2C%20Miami%2C%20FL%2033174!5e0!3m2!1sen!2sus!4v1778004247140!5m2!1sen!2sus"
                        className="absolute inset-0 w-full h-full pointer-events-none" // pointer-events-none prevents the map from intercepting clicks
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FIU BME Lab Location"

                    />
                </div>
                <div className="h-full w-full md:w-1/2 p-4">
                    <ContactForm />
                </div>
            </CardContent>
        </Card>
    )
}


const Contact = () => {
    return (
        <>
            <Header />
            <main className="h-auto py-12 md:h-screen w-full bg-linear-to-br from-primary to-secondary flex flex-col items-center justify-center px-8 md:px-16 gap-4">
                <ContactCard />
            </main>
            <LocationSection />
            <Footer />
        </>
    )
}

export default Contact;

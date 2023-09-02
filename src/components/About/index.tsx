'use client'

import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const About01 = () => {
    const { ref, inView } = useInView({ threshold: 0.5, });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex  flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-contain bg-no-repeat h-[640px]"
                    >
                        <Image src={"/images/about.png"} width={400} height={400} alt="profile-pict" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="h2 text-accent">About Us!</h2>
                        <h3 className="h3 mb-4">We are a Digital Agency</h3>
                        <p className="mb-6">
                            Exercitation adipisicing voluptate Lorem est consequat aliqua ut
                            dolore laboris ut qui id dolor proident.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary font-bold mb-2">
                                    {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary font-bold mb-2">
                                    {/* KALO DILIAT DIA NGITUNG */}
                                    {inView ? <CountUp start={0} end={23} duration={3} /> : null}+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projects <br />
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary font-bold mb-2">
                                    {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Professional <br />
                                    Team
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact us!</button>
                            <a href="#" className="text-gradient btn-link">
                                Our Portofolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>)
}

export default About01
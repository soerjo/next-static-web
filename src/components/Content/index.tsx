'use client'

import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { services } from './services.constant'
import Image from 'next/image';

const Content01 = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 mb-12 lg:mb-0 justify-center"
                    >
                        <h2 className="h2 mb-6">What we do?</h2>
                        <Image src={"/images/services.png"} width={390} height={390} alt='services-images' />
                        <h3 className="h3 max-w-[455px] mb-16">
                            We are Digital Agency with professional team!
                        </h3>
                        <button className="btn btn-sm">See our works</button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        {/* SERVICES LIST */}
                        <div>
                            {services.map((services, index) => {
                                const { name, description, link } = services;
                                return (
                                    <div
                                        className="border-b border-white/30 h-auto mt-1 mb-[30px] flex"
                                        key={index}
                                    >
                                        <div className="max-w-[476px] mb-10">
                                            <h4 className="text-[20px] tracking-wider font-semibold mb-6">
                                                {name}
                                            </h4>
                                            <p className="font-secondary leading-tight opacity-70">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">
                                            <a
                                                href="#"
                                                className="w-9 h-9 mb-[42px] flex justify-center items-center"
                                            >
                                                {/* <BsArrowUpRight /> */}
                                                <Image src={'/icon/arrow-up.svg'} width={100} height={100} alt={'arrow-up'} />
                                            </a>
                                            <a href="#" className="text-gradient text-sm ">
                                                {link}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>)
}

export default Content01
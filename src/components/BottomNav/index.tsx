`use client`

import React from 'react'
import Image from 'next/image';

const BottomNav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50" >
                    <ul className='flex justify-around items-center gap-4 w-full'>
                        <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" >
                            <a href="#home">
                                <Image src={"/icon/nav-home.svg"} width={50} height={50} alt='icon-btn' />
                            </a>
                        </li>
                        <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" >
                            <a href="#about">
                                <Image src={"/icon/nav-about.svg"} width={50} height={50} alt='icon-btn' />
                            </a>
                        </li>
                        <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" >
                            <a href="#services">
                                <Image src={"/icon/nav-services.svg"} width={50} height={50} alt='icon-btn' />
                            </a>
                        </li>
                        <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" >
                            <a href="#contact">
                                <Image src={"/icon/nav-contact.svg"} width={50} height={50} alt='icon-btn' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default BottomNav
import Image from 'next/image'
import React from 'react'

const Navbar01 = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <Image className='w-28 h-18' width={300} height={300} src={"/logo/main-logo.png"} alt={'logo_svg'} />
                    </a>
                    <button className='btn btn-sm'>Work with us!</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar01
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let [laptop, setLaptop] = useState(false)
    const pathName = usePathname();
    useEffect(() => {
        const handleResize = () => {
            setLaptop(window.innerWidth >= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const toggle = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    useEffect(() => {
        const handleScroll = () => {
          if (isMenuOpen) setIsMenuOpen(false);
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isMenuOpen]);
    return (
        <nav className='w-full h-[70px] flex items-center fixed'
            style={{
                background: "radial-gradient(circle at left top, #e9f6f7 0%, white 60%)",
            }}
        >
            <div className='w-[80%] flex items-center
            md:w-[75%]'>
                <Link href={'https://github.com/iamkhushbooy'}>
                    <Image
                        className='ml-3 md:ml-8'
                        src={'/icons/github.png'}
                        width={30} height={30}
                        alt={'github'}>
                    </Image>
                </Link>
                <h1 className='font-extrabold text-[22px] ml-3 bg-clip-text 
                text-transparent bg-gradient-to-r from-[rgb(59,144,197)] via-pink-500 
                 to-[rgb(59,144,197)] '>
                    Khushboo
                </h1>
            </div>
            {!laptop ? <>
                <div className=' w-[20%] flex justify-around '>
                    {isMenuOpen !== null && (
                        <Image
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            src={isMenuOpen ? '/icons/close.png' : '/icons/menu.png'}
                            alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                            width={isMenuOpen ? 20 : 30}
                            height={isMenuOpen ? 10 : 30}

                        />
                    )}
                </div>
            </>
                :
                <>
                    <div id="forbuger" className='w-[20%] h-[70px]
                  flex justify-around items-center font-semibold
                  md:w-[25%] mr-10'>
                        <Link
                            href={'./#home'}
                            className={`${pathName === './#home' ?
                                ' text-[rgb(59,144,197)]' :
                                'text-gray-500  hover:text-[rgb(59,144,197)] underline decoration-transparent hover:decoration-inherit hover:underline-offset-4'}`}>
                            Home
                        </Link>
                        <Link
                            href={'./#about'}
                            className={`${pathName === './#about' ?
                                ' text-[rgb(59,144,197)]' :
                                'text-gray-500 hover:text-[rgb(59,144,197)] underline decoration-transparent hover:decoration-inherit hover:underline-offset-4'}`}>
                            About
                        </Link>
                        <Link
                            href={'./#projects'}
                            className={`${pathName === './#projects' ?
                                ' text-[rgb(59,144,197)]' :
                                'text-gray-500 hover:text-[rgb(59,144,197)] underline decoration-transparent hover:decoration-inherit hover:underline-offset-4'}`}>
                            Projects
                        </Link>
                        <Link href={'/contact'}
                            className={`${pathName === '/contact' ?
                                ' text-[rgb(59,144,197)]' : 'text-gray-500 hover:text-[rgb(59,144,197)] underline decoration-transparent hover:decoration-inherit hover:underline-offset-4'}`}>
                            Contact
                        </Link>

                    </div>
                </>}
            {isMenuOpen &&
                <div id="forbuger" className='w-full mt-[100px] underline
                  flex justify-center items-center 
                   absolute overflow-hidden'
                   style={{
                    background: "radial-gradient(circle at left top, #e9f6f7 0%, white 60%)",
                }}>
                    <Link onClick={toggle}
                          className='m-3 font-bold text-[rgb(59,144,197)]' href={'/'}>
                        Home
                    </Link>
                    <Link
                        onClick={toggle}
                        className='m-3 font-bold text-[rgb(59,144,197)]' href={'/about'}>
                        About
                    </Link>
                    <Link
                        onClick={toggle}
                        className='m-3 font-bold text-[rgb(59,144,197)]' href={'/projects'}>
                        Projects
                    </Link>
                    <Link
                        onClick={toggle}
                        className='m-3 font-bold text-[rgb(59,144,197)]' href={'/contact'}>
                        Contact
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Header
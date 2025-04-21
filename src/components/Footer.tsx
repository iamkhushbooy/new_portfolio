import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full h-[200px] p-4 bg-[rgb(108,165,201)]/20 mt-20">
            <h1 className="text-center text-[15px] text-gray-400">Follow Me</h1>
            <div className="flex justify-center mt-2">
                <Link href={''} className="m-3">
                    <Image
                        src={'/icons/linkedin.png'}
                        alt="LinkedIn"
                        width={30}
                        height={30} />
                </Link>
                <Link href={''} className="m-3 bg-slate-50">
                    <Image
                        src={'/icons/x.png'}
                        alt="X" width={30}
                        height={30} />
                </Link>
                <Link href={''} className="m-3">
                    <Image
                        src={'/icons/instagram.png'}
                        alt="Instagram" width={30}
                        height={30} />
                </Link>
            </div>
            <p
                className="text-center mt-4 text-[15px] text-gray-400">
                khushboocsjmu@gmail.com
            </p>
            <p
                className="text-center mt-2 text-[14px] text-gray-600">
                &copy; 2024 By Khushboo Yadav
            </p>
        </footer>
    )
}

export default Footer;

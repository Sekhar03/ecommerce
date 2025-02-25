'use client';
import Image from 'next/image';
import RoundedButton from '@/components/global/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '@/components/global/Magnetic';

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className="text-white flex flex-col items-center justify-center bg-[#141516] relative">
            <div className="pt-[200px] w-full max-w-[1800px] bg-[#141516]">
                <div className="border-b border-gray-500 pb-[100px] mx-[200px] relative">
                    <span className="flex items-center">
                        <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden">
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/background.jpg`}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="ml-[0.3em] text-[5vw] m-0 font-light">Let&apos;s work</h2>
                    </span>
                    <h2 className="text-[5vw] m-0 font-light">together</h2>
                    <motion.div style={{ x }} className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]">
                        <RoundedButton backgroundColor={"#334BD3"} className="w-[180px] h-[180px] bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer">
                            <p className="m-0 text-lg font-light relative z-10">Get in touch</p>
                        </RoundedButton>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[30%] left-full">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className="flex gap-5 mt-[100px] mx-[200px]">
                    <RoundedButton>
                        <p>info@dennissnellenberg.com</p>
                    </RoundedButton>
                    <RoundedButton>
                        <p>+31 6 27 84 74 30</p>
                    </RoundedButton>
                </div>
                <div className="flex justify-between mt-[200px] p-5">
                    <div className="flex gap-2.5 items-end">
                        <span className="flex flex-col gap-3.5">
                            <h3 className="text-gray-500 cursor-default font-light text-base">Version</h3>
                            <p className="cursor-pointer">2022 © Edition</p>
                        </span>
                        <span className="flex flex-col gap-3.5">
                            <h3 className="text-gray-500 cursor-default font-light text-base">Version</h3>
                            <p className="cursor-pointer">11:49 PM GMT+2</p>
                        </span>
                    </div>
                    <div className="flex gap-2.5 items-end">
                        <span className="flex flex-col gap-3.5">
                            <h3 className="text-gray-500 cursor-default font-light text-base">socials</h3>
                            <Magnetic>
                                <p className="cursor-pointer">Awwwards</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p className="cursor-pointer">Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p className="cursor-pointer">Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p className="cursor-pointer">Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
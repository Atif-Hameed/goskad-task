'use client'
import React from "react";
import Navbar from "../../layout/header/navbar";
import { ChevronRight } from "lucide-react";
import NavigateButton from "../../shared/navigate-button";
import { email, emailPlaceholder, heroHeading, herop1, herop2, sessionStart } from "@/app/utils/constants";
import CustomImage from "../../shared/custom-image";
import Container from "../../shared/container";
import Logos from "./logos";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <Container parentStyle="relative overflow-hidden" className="px-6 xl:min-h-screen overflow-hidden bg-white">
            {/* Navbar */}
            <Navbar />

            {/* bg */}
            <div className="absolute inset-x-0 top-0 h-[520px] z-20 pointer-events-none">
                <Image
                    src="/gifs/hero-gradient.gif"
                    alt="animated background"
                    fill
                    className="object-cover hero-gradient hero-gradient-full"
                    priority
                />
            </div>

            {/* content */}
            <div className="relative z-30  pt-12">
                <span className=" px-3  relative py-1 mb-6 flex items-center w-fit gap-1 text-xs font-medium text-white bg-black/40 rounded-full">
                    {sessionStart} <ChevronRight size={12} />
                </span>

                <h1 className="sm:text-7xl text-5xl lg:text-[82px]  font-helveticaNeue font-semibold lg:max-w-xl max-w-2xl relative z-30 ">
                    {heroHeading}
                </h1>


                <p className="mt-4 text-lg text-gray-700 lg:max-w-xl max-w-2xl ">
                    {herop1}
                </p>
                <p className="mt-4 text-lg text-gray-700 lg:max-w-xl max-w-2xl">
                    {herop2}
                </p>

                <div className="mt-8 flex w-fit items-center space-x-3 bg-gray border-gray-400 border p-1 rounded-full">
                    <input
                        type={email}
                        placeholder={emailPlaceholder}
                        className="px-4 py-0 bg-transparent sm:w-auto w-40 text-gray-800 placeholder:text-gray-800 "
                    />
                    <NavigateButton
                        className="!bg-slate-900 rounded-full gap-2  !py-1 hover:!bg-gray-700 text-white"
                    />
                </div>
            </div>

            {/* image */}
            <div className="lg:flex hidden absolute 2xl:-right-[20%] xl:-right-[30%] lg:-right-[45%] -right-[60%] top-[20%] z-20">
                <CustomImage
                    src='/assets/images/heropic.png'
                    alt="hero image"
                    className="w-full h-full"
                    width={1000}
                    height={1000}
                />
            </div>

            <Logos />
        </Container>
    );
};

export default Hero;

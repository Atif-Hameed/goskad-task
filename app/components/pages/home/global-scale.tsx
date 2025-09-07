import React from "react";
import Container from "../../shared/container";
import SectionTitle from "../../shared/section-title";
import SectionHeading from "../../shared/section-heading";
import SectionText from "../../shared/section-text";
import { globalScaleTitle, globalScaleHeading, globalScaleText } from "@/app/utils/constants";
import { globalScaleStats } from "@/app/data";

const GlobalScale = () => {
    return (
        <section className="relative bg-darkBg text-white overflow-hidden 
      lg:[clip-path:polygon(0_25%,100%_0,100%_100%,0%_100%)]  sm:[clip-path:polygon(0_15%,100%_0,100%_100%,0%_100%)] [clip-path:polygon(0_10%,100%_0,100%_100%,0%_100%)]">
            <Container parentStyle="relative" className=" z-10 px-6 py-24 gap-12 items-center">
                {/* Left Content */}
                <div className="sm:mt-40 mt-10 z-50 relative">
                    <div className="max-w-lg space-y-5">
                        <SectionTitle label={globalScaleTitle} className="!text-cyan-400" />
                        <SectionHeading
                            label={globalScaleHeading}
                            className="text-white sm:!text-4xl font-semibold !text-2xl"
                        />
                        <SectionText
                            label={globalScaleText}
                            className="!text-gray-400 max-w-lg"
                        />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center md:text-left">
                        {globalScaleStats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-2xl font-bold border-l border-cyan-400 sm:pl-3">{stat.value}</p>
                                <p className="text-sm text-gray-400 sm:pl-3">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="hidden md:flex absolute right-0 top-0 z-0 opacity-50 w-[700px] h-full">
                    <video
                        src="/assets/videos/global.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label="global video"
                        className="rounded-bl-full shadow-lg w-full h-full object-cover"
                    />
                </div>
            </Container>
        </section>
    );
};

export default GlobalScale;
'use client';
import React, { useEffect, useState } from 'react';
import Container from '../../shared/container';
import SectionTitle from '../../shared/section-title';
import SectionHeading from '../../shared/section-heading';
import SectionText from '../../shared/section-text';
import { ChevronRightCircle } from 'lucide-react';
import CustomImage from '../../shared/custom-image';
import { enterPriseData } from '@/app/data';
import { explore } from '@/app/utils/constants';

const Enterprise = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto change slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % enterPriseData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [enterPriseData.length]);

    return (
        <Container className="px-6 py-20">
            <div className="space-y-4 max-w-2xl">
                <SectionTitle label="Enterprise reinvention" />
                <SectionHeading label="Bring agility to your enterprise" />
                <SectionText label="Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our professional services team and certified partners, and connect Stripe to Salesforce, SAP, and more through the Stripe App Marketplace." />
                
                <span className="px-3 relative py-1 mb-6 flex items-center w-fit gap-1 text-xs font-medium text-white bg-secondary rounded-full">
                    {explore} <ChevronRightCircle size={12} />
                </span>
            </div>

            {/* Static Layout */}
            <div className="mt-10 flex md:flex-row flex-col w-full gap-6">
                {/* Left Text */}
                <div className="w-full md:!w-[25%]  space-y-5">
                    <div className="content-transition h-full" key={currentSlide}>
                        <div className="flex flex-col justify-around h-full">
                            <div>
                                <h3 className="text-lg border-l pl-3 font-semibold text-gray-900">
                                    {enterPriseData[currentSlide].heading1}
                                </h3>
                                <p className="text-gray-500 pl-3 text-sm">{enterPriseData[currentSlide].value1}</p>
                            </div>
                            <div>
                                <h3 className="text-lg border-l pl-3 font-semibold text-gray-900">
                                    {enterPriseData[currentSlide].heading2}
                                </h3>
                                <p className="text-gray-500 pl-3 text-sm">{enterPriseData[currentSlide].value2}</p>
                            </div>
                            <div>
                                <h3 className="text-lg border-l pl-3 font-semibold text-gray-900">
                                    {enterPriseData[currentSlide].heading3}
                                </h3>
                                <p className="text-gray-500 pl-3 text-sm">{enterPriseData[currentSlide].value3.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:!w-[75%] w-full relative group max-h-[400px] rounded-2xl overflow-hidden">
                    <div className="image-transition" key={currentSlide}>
                        <CustomImage
                            key={currentSlide}
                            alt={enterPriseData[currentSlide].label}
                            src={enterPriseData[currentSlide].img}
                            width={500}
                            priority={true}
                            height={500}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        {/* Overlay gradient */}
                        <div
                            className={`absolute bottom-0 left-0 w-full h-full ${enterPriseData[currentSlide].overlay} rounded-2xl`}
                        />

                        {/* Smooth animated text */}
                        <div className="absolute inset-0 flex flex-col justify-between p-4">
                            <p
                                key={`label-${currentSlide}`}
                                className="text-white font-semibold text-2xl max-w-md opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                            >
                                {enterPriseData[currentSlide].label}
                            </p>
                            <p
                                key={`des-${currentSlide}`}
                                className="text-white font-semibold text-xl max-w-md opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                            >
                                {enterPriseData[currentSlide].des}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .content-transition {
                    transition: opacity 0.5s ease-in-out;
                }
                .image-transition {
                    transition: opacity 0.5s ease-in-out;
                }
                .blue-gradient {
                    background: linear-gradient(to top, rgba(0, 32, 96, 0.65), rgba(0, 32, 96, 0.1));
                }
                .red-gradient {
                    background: linear-gradient(to top, rgba(185, 28, 28, 0.65), rgba(185, 28, 28, 0.1));
                }
                .yellow-gradient {
                    background: linear-gradient(to top, rgba(202, 138, 4, 0.65), rgba(202, 138, 4, 0.1));
                }
                .green-gradient {
                    background: linear-gradient(to top, rgba(21, 128, 61, 0.65), rgba(21, 128, 61, 0.1));
                }
            `}</style>
        </Container>
    );
};

export default Enterprise;

import React from "react";
import Container from "../../shared/container";
import SectionTitle from "../../shared/section-title";
import { launchHeading, launchText, launchTitle } from "@/app/utils/constants";
import SectionHeading from "../../shared/section-heading";
import SectionText from "../../shared/section-text";
import { launchData } from "@/app/data";
import CustomImage from "../../shared/custom-image";
import NavigateButton from "../../shared/navigate-button";

const Launch = () => {
    return (
        <Container className="py-20 px-6">
            <div className="space-y-3 mb-10 max-w-xl">
                <SectionTitle label={launchTitle} />
                <SectionHeading label={launchHeading} />
                <SectionText label={launchText} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {launchData?.map((e, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-xl shadow-md cursor-pointer overflow-hidden 
                                   flex flex-col justify-between transition-all duration-300 
                                   hover:shadow-xl"
                    >
                        {/* Image wrapper keeps height fixed */}
                        <div className="h-48 overflow-hidden relative">
                            <CustomImage
                                alt={e.label}
                                src={e.img}
                                className="w-full h-full object-cover transition-all duration-300 ease-in-out 
                                           group-hover:h-40"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            {/* Text also moves up on hover */}
                            <div
                                className="space-y-3 transition-transform duration-300 ease-in-out 
                                           group-hover:-translate-y-8"
                            >
                                <SectionHeading label={e.label} />
                                <SectionText label={e.des} />
                            </div>

                            {/* Button */}
                            <div
                                className="mt-6 opacity-0 translate-y-4 transition-all duration-300 ease-in-out 
                                           group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <NavigateButton
                                    label="View Partners"
                                    className="hover:!text-black text-secondary"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Launch;

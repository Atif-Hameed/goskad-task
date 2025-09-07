"use client";

import React from "react";
import CustomLink from "../../shared/custom-link";
import CustomImage from "../../shared/custom-image";
import Container from "../../shared/container";
import {
    companyTitle,
    resourcesTitle,
    companyDescription,
    copyrightText,
    bottomTagline,
    companyName,
} from "@/app/utils/constants";
import { companyLinks, resourcesLinks, socialLinks } from "@/app/data";

const Footer = () => {
    return (
        <Container className="px-6 bg-white py-10">
            <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Section */}
                <div className="space-y-3">
                    {/* Logo */}
                    <CustomLink href="/" className="flex items-center gap-1.5">
                        <CustomImage
                            alt={`${companyName} logo`}
                            src="/assets/images/sque-logo.svg"
                            className="h-14 w-14"
                        />
                        <h3 className="font-medium text-2xl text-black">{companyName}</h3>
                    </CustomLink>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 max-w-sm">
                        {companyDescription}
                    </p>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">{copyrightText}</p>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-10 text-gray-500">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <CustomLink
                                key={label}
                                href={href}
                                ariaLabel={label}
                                className="hover:text-gray-700 transition"
                            >
                                <Icon className="h-5 w-5" />
                            </CustomLink>
                        ))}
                    </div>
                </div>

                {/* Right Sections */}
                <div className="flex items-start gap-10 justify-end col-span-2">
                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">{companyTitle}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {companyLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <CustomLink
                                        href={href}
                                        ariaLabel={label}
                                        className="hover:text-gray-900"
                                    >
                                        {label}
                                    </CustomLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">{resourcesTitle}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {resourcesLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <CustomLink
                                        href={href}
                                        ariaLabel={label}
                                        className="hover:text-gray-900"
                                    >
                                        {label}
                                    </CustomLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Tagline */}
            <div className="text-center text-sm text-gray-500 mt-10">
                {bottomTagline}
            </div>
        </Container>
    );
};

export default Footer;

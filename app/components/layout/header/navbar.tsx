"use client";

import React, { useState } from "react";
import Container from "../../shared/container";
import CustomImage from "../../shared/custom-image";
import CustomLink from "../../shared/custom-link";
import { navbarRoutes } from "@/app/data";
import NavigateButton from "../../shared/navigate-button";
import { Menu, X } from "lucide-react";
import { getStarted, singIn } from "@/app/utils/constants";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className="flex items-center justify-between py-4 !px-0 relative z-50">
            {/* Logo */}
            <CustomLink href="/" className="flex items-center gap-1.5">
                <CustomImage
                    alt="sque logo"
                    src="/assets/images/sque-logo.svg"
                    className="h-14 w-14"
                />
                <h3 className="font-medium text-2xl text-white">Sque</h3>
            </CustomLink>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-6 text-white font-medium">
                {navbarRoutes.map((nav, idx) => (
                    <CustomLink key={idx} href={nav.src}>
                        {nav.label}
                    </CustomLink>
                ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
                <NavigateButton
                    label={singIn}
                    ariaLebel={singIn}
                    className="hover:text-white/70 text-white"
                />
                <NavigateButton
                    label={getStarted}
                    ariaLebel={getStarted}
                    className='!bg-white z-50 hover:!bg-white/80  text-pink-800  rounded-full !py-1 px-5'
                />
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden text-black"
                aria-label="menu"
            >
                <Menu size={28} />
            </button>

            {/* Mobile Overlay Menu */}
            <div
                className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center absolute top-6 right-0 px-6 w-full justify-between">
                    {/* Logo */}
                    <CustomLink href="/" className="flex items-center gap-1.5">
                        <CustomImage
                            alt="sque logo"
                            src="/assets/images/sque-logo.svg"
                            className="h-14 w-14"
                        />
                        <h3 className="font-medium text-2xl text-black">Sque</h3>
                    </CustomLink>
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className=" text-black"
                        aria-label="close"
                    >
                        <X size={32} />
                    </button>
                </div>


                {/* Mobile Nav Links */}
                <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-black">
                    {navbarRoutes.map((nav, idx) => (
                        <CustomLink
                            key={idx}
                            href={nav.src}
                            ariaLabel={nav.label}
                            onClick={() => setMenuOpen(false)}
                        >
                            {nav.label}
                        </CustomLink>
                    ))}
                </ul>

                {/* Mobile Buttons */}
                <div className="mt-10 flex flex-col gap-4 w-40">
                    <NavigateButton
                        label={singIn}
                        ariaLebel={singIn}
                        className="w-full border border-black text-black hover:bg-black hover:text-white"
                    />
                    <NavigateButton
                        label={getStarted}
                        ariaLebel={getStarted}
                        className="w-full !bg-black text-white hover:!bg-gray-800 rounded-full"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Navbar;

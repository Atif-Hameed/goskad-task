"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Container from "../../shared/container";
import SectionTitle from "../../shared/section-title";
import SectionHeading from "../../shared/section-heading";
import SectionText from "../../shared/section-text";
import {
  controlHeading,
  controlList,
  controlText,
  mission,
  missionHeading,
  missionText,
  practiceHeading,
  practiceList,
  practices,
  practiceText,
  SavingHeading,
  Savings,
  SavingText,
  yourControl,
} from "@/app/utils/constants";

const Solutions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness (lower = faster)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Container parentStyle="bg-cgreen" className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* scrollable content */}
        <div ref={scrollRef} className="space-y-20">
          <div className="md:pb-20 pt-20 space-y-5">
            <SectionTitle label={Savings} />
            <SectionHeading label={SavingHeading} />
            <SectionText label={SavingText} />
          </div>

          <div className="md:py-20 py-0 space-y-5">
            <SectionTitle label={yourControl} />
            <SectionHeading label={controlHeading} />
            <SectionText label={controlText} />
          </div>

          <div className="md:py-20 py-0 space-y-5">
            <SectionTitle label={yourControl} />
            <SectionHeading label={controlHeading} />
            <SectionText label={controlText} />
            <ul className="mt-5 list-disc pl-6 space-y-2">
              {controlList.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="md:py-20 py-0 space-y-5">
            <SectionTitle label={mission} />
            <SectionHeading label={missionHeading} />
            <SectionText label={missionText} />
          </div>

          <div className="md:py-20 py-0 space-y-5">
            <SectionTitle label={practices} />
            <SectionHeading label={practiceHeading} />
            <SectionText label={practiceText} />
            <ul className="mt-5 list-disc pl-6 space-y-2">
              {practiceList.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* sticky video */}
        <div className="hidden md:block h-full">
          <div className="sticky top-20 pt-20 h-[500px]">
            <video
              src="/assets/videos/video.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="section video"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Solutions;

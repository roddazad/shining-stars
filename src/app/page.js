import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero"
import HighlightsSection from "../components/HighlightsSection"
import WhatWeDo from '../components/WhatWeDo';
import Testimonials from "../components/Testimonials"
import GetStartedSection from "@/components/GetStartedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <WhatWeDo />
     
      <GetStartedSection />
      <Testimonials />
    </>
  );
}
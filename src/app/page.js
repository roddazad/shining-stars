import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero"
import HighlightsSection from "../components/HighlightsSection"

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsSection />
    </>
  );
}
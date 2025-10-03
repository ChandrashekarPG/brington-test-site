import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";

const heroImg = "https://img.freepik.com/free-vector/technology-banner-background-with-hexagonal-shapes-text-space_1017-22589.jpg?semt=ais_hybrid&w=740&q=80";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Sample Website — Brington Test</title>
        <meta
          name="description"
          content="Recreation of sample website for probation task."
        />
        <meta property="og:title" content="Sample Website" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] grid place-items-center bg-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${heroImg}')` }}
          role="img"
          aria-label="Background hero image"
        />
        <div className="relative z-10 max-w-5xl w-full px-6 text-white">
          <h1 className="text-5xl md:text-[7rem] leading-[0.95] font-extrabold">
            I am a Sample Website
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl">
            I'm a Sample Website, Create me as same as I am, Don't Do any
            Mistakes.
          </p>
          <a
            href="#services"
            className="inline-flex mt-8 rounded-full bg-pink-500 px-6 py-3 text-white hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
        <a
          href="#numbers"
          className="absolute bottom-6 text-white/80 text-sm"
        >
          Scroll ↓
        </a>
      </section>

      {/* Numbers Section */}
      <section
        id="numbers"
        className="bg-gradient-to-b from-rose-200 to-white py-16"
      >
        <h2 className="text-center text-lg font-semibold">
          Sample Numbers
          <br />
          Row No. 1
        </h2>
        <div className="max-w-6xl mx-auto mt-6 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[73, 89, 102].map((n) => (
            <div
              key={n}
              className="rounded-[2rem] border px-8 py-10 text-center text-6xl bg-white/70"
            >
              {n}
              <span className="ml-2 text-xl align-top">Unit</span>
            </div>
          ))}
        </div>

        <h2 className="text-center text-lg font-semibold mt-12">
          Sample Numbers
          <br />
          Row No. 2
        </h2>
        <div className="max-w-6xl mx-auto mt-6 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[71, 81, "+81"].map((n) => (
            <div
              key={n}
              className="rounded-[2rem] border px-8 py-10 text-center text-6xl bg-white/70"
            >
              {n}
              <span className="ml-2 text-xl align-top">Unit</span>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Number */}
      <section className="bg-teal-600 py-24 text-center">
        <p className="text-[8rem] leading-none font-semibold tracking-tight">
          1,034
        </p>
        <p className="mt-4 text-black">Sample Data about Sample Things</p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative overflow-hidden text-center text-white py-24"
        style={{
          background: "linear-gradient(135deg,#374151 0%,#60a5fa 100%)",
        }}
      >
        <h2 className="text-5xl md:text-7xl font-bold">
          Accomplish Anything in Developing
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or
          features.
        </p>
      </section>

      {/* Checklist Section */}
      <section
        className="py-24 text-white"
        style={{
          background: "linear-gradient(135deg,#374151 0%,#60a5fa 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <ul className="space-y-4">
            <li>✔ Sample Text 1</li>
            <li>✔ Sample Text</li>
            <li>✔ Sample Text</li>
          </ul>
          <ul className="space-y-4">
            <li>✔ Sample Text</li>
            <li>✔ Sample Text</li>
            <li>✔ Sample Text</li>
          </ul>
        </div>
        <div className="text-center mt-10">
          <a
            href="#about"
            className="inline-flex rounded bg-emerald-500 px-6 py-3"
          >
            Create Now!
          </a>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y py-4">
        <div className="whitespace-nowrap animate-[ticker_20s_linear_infinite] text-4xl font-semibold text-emerald-600">
          ✦ HURDLES ✦ HURDLES ✦ HURDLES ✦ HURDLES ✦ HURDLES ✦ HURDLES ✦
        </div>
        <style>
          {`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}
        </style>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="text-center py-24 bg-gradient-to-b from-emerald-500 to-white"
      >
        <h2 className="text-4xl font-bold">ABOUT THE RACE</h2>
        <p className="max-w-2xl mx-auto mt-4">
          This is a race of yourself to yourself. Fight the race! Develop the
          website. Complete the task. As a developer, it's Not That hard.
        </p>
      </section>

      {/* Accordion + Carousel */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <Accordion
          items={[
            { title: "Sample Text 1", content: "Details about sample text 1." },
            { title: "Sample Text 2", content: "More details about sample text 2." },
            { title: "Sample Text 3", content: "Even more details here." },
          ]}
        />
        <Carousel>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold">Card {i}</h3>
              <p className="text-sm mt-2">Carousel card content.</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-24 text-center">
        <h2 className="text-5xl font-bold mb-10">Speakers</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {[
            "Harry Williams",
            "Akira Lee",
            "Veronika Zakharova",
            "Ann Jacobs",
            "Lissa Cross",
            "Murty Yang",
          ].map((name, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="text-left">
                <p className="text-xl font-medium">{name}</p>
                <p className="text-sm text-gray-500">
                  Director of Mobile Gaming, Fixer
                </p>
              </div>
              <button className="border px-4 py-1 rounded-full">LinkedIn</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

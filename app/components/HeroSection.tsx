import { heroData } from "../data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#8b2d13]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-[#6b1f12] via-[#c75a1a] to-[#812814]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src={heroData.backgroundImage}
          alt=""
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="select-none object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[70%] w-[70%] rounded-full bg-[#ff8a2b]/30 blur-[100px]"
      />

      <div className="mx-auto grid max-w-[1600px] lg:min-h-[min(900px,100svh)] lg:grid-cols-[45%_55%] relative isolate z-0">
        <div className="relative min-w-0 px-6 pt-16 pb-8 sm:px-10 sm:pt-20 lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:justify-center lg:py-20 lg:pr-12 lg:pl-4 xl:pr-16">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            {heroData.name}
          </p>
          <h1
            id="hero-title"
            className="hero-title text-[clamp(2.25rem,6.75vw,4rem)] font-black uppercase leading-[.9] tracking-[-0.03em] text-white lg:text-[clamp(2.75rem,4.5vw,4.5rem)]"
          >
            {heroData.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-8 w-full max-w-md sm:mt-10">
            <p className="hero-desc max-w-sm text-lg leading-tight text-white/90 sm:text-xl lg:text-2xl">
              {heroData.description}
            </p>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 531 167"
              fill="none"
              className="pointer-events-none relative -z-10 mt-6 hidden h-auto w-full sm:block ms-[-50%]"
            >
              <path d="M0 166H522V22" stroke="white" strokeOpacity="0.5" />
              <circle cx="522" cy="9" r="9" fill="white" fillOpacity="0.2" />
              <circle cx="522" cy="9" r="5" fill="white" fillOpacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="hero-image pointer-events-none relative h-[clamp(20rem,80vw,34rem)] min-w-0 lg:col-start-1 lg:row-start-1 lg:h-auto lg:min-h-[640px]">
          <Image
            src={heroData.portrait.src}
            alt={heroData.portrait.alt}
            fill
            preload
            sizes="(min-width: 1600px) 720px, (min-width: 1024px) 45vw, 100vw"
            className="select-none object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react'

function Hero() {
  const [spin, setSpin] = useState({ id: 0, direction: 1 })
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSpin((currentSpin) => ({
        id: currentSpin.id + 1,
        direction: Math.random() < 0.5 ? -1 : 1,
      }))
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-primary text-ink"
      aria-labelledby="hero-title"
    >
      <header className="relative z-[2] grid grid-cols-[1fr_auto_1fr] items-start px-9 pt-10 font-sans text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.35] max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-x-4 max-[700px]:gap-y-1 max-[700px]:px-5 max-[700px]:pt-6 max-[700px]:text-sm">
        <div
          className="animate-hero-fade-in justify-self-start opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: '720ms' }}
        >
          <p className="m-0 font-bold">Nataly Hernandez</p>
          <p className="m-0 font-normal">UX Designer · Computer Systems Engineer</p>
        </div>

        <p
          className="animate-hero-fade-in m-0 justify-self-center opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 max-[700px]:col-start-2 max-[700px]:row-start-1"
          style={{ animationDelay: '1080ms' }}
        >
          {currentYear}
        </p>

        <a
          className="animate-hero-fade-in justify-self-end font-bold opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 max-[700px]:col-span-2 max-[700px]:row-start-2 max-[700px]:justify-self-start"
          href="mailto:natalyhn.8@gmail.com"
          style={{ animationDelay: '1440ms' }}
        >
          natalyhn.8@gmail.com
        </a>
      </header>

      <div
        className="relative z-[1] flex min-h-0 flex-1 items-center justify-center"
        aria-hidden="true"
      >
        <div className="animate-hero-fade-in aspect-[418/402] w-[clamp(12rem,20vw,20rem)] shrink-0 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 max-[700px]:w-[clamp(15rem,65vw,20rem)]">
          <img
            key={spin.id}
            className="block size-full animate-hero-star-spin object-contain motion-reduce:animate-none"
            src="/Fuzzy Star.png"
            alt=""
            style={{ '--spin-direction': spin.direction }}
          />
        </div>
      </div>

      <h1
        className="animate-hero-fade-in relative z-[2] m-0 mb-[14svh] w-full shrink-0 whitespace-nowrap text-center font-display text-[clamp(4rem,14.25vw,13.75rem)] font-normal leading-[0.8] tracking-[0.025em] opacity-0 blur-[1px] motion-reduce:animate-none motion-reduce:opacity-100 max-[700px]:mb-[12svh] max-[700px]:text-[clamp(3.5rem,18vw,8rem)] max-[700px]:tracking-normal"
        id="hero-title"
        style={{ animationDelay: '1800ms' }}
      >
        PORTFOLIO
      </h1>
    </section>
  )
}

export default Hero

import useScrollReveal from '../hooks/useScrollReveal.js'

const disciplines = [
  ['UX', 'DESIGN'],
  ['PRODUCT', 'DESIGN'],
  ['COMPUTER', 'SCIENCE'],
  ['DATA', 'VISUALIZATION'],
]

const linePositions = [
  'ml-0',
  'ml-[10.7%] max-[700px]:ml-[4%]',
  'ml-[19.7%] max-[700px]:ml-[8%]',
  'ml-[30.2%] max-[700px]:ml-[12%]',
]

function Overview() {
  const { isVisible, ref } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative isolate min-h-svh overflow-hidden bg-secondary text-primary"
      aria-labelledby="overview-title"
    >
      <h2
        className="absolute inset-0 m-0 grid grid-rows-4 items-center px-[3.8%] py-[10%] font-display text-[clamp(3.5rem,6.65vw,8rem)] font-normal uppercase leading-[0.98] tracking-[0.015em] max-[700px]:px-[5%] max-[700px]:py-[5%] max-[700px]:text-[clamp(2.5rem,14vw,6rem)] max-[700px]:tracking-normal"
        id="overview-title"
      >
        {disciplines.map((discipline, index) => (
          <span
            className={`block whitespace-nowrap blur-[1px] transition-[transform,opacity] duration-700 ease-out motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:translate-x-0 ${linePositions[index]} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[clamp(2rem,8vw,8rem)] opacity-0'}`}
            key={discipline.join('-')}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className="max-[700px]:block max-[700px]:font-light">
              {discipline[0]}
            </span>{' '}
            <span className="max-[700px]:block max-[700px]:break-words max-[700px]:text-[0.6em] max-[700px]:whitespace-normal">
              {discipline[1]}
            </span>
          </span>
        ))}
      </h2>

      <img
        className="absolute bottom-[5.7%] left-[4.3%] h-auto w-[clamp(6.5rem,8.75vw,10.5rem)] drop-shadow-[0.3rem_0.3rem_0_rgba(220,115,75,0.28)] hover:animate-pointy-star-pulse motion-reduce:hover:animate-none max-[700px]:bottom-auto max-[700px]:left-auto max-[700px]:right-[clamp(1.5rem,10vw,4rem)] max-[700px]:top-[5%] max-[700px]:w-[min(20vw,8rem)]"
        src="/PointyFuzzyStar.png"
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}

export default Overview

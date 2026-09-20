import {
  Braces,
  FileCode2,
  Mail,
  PanelsTopLeft,
  PenTool,
  Scan,
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal.js'

const education = [
  {
    date: '2026-2027',
    title: 'Visual Arts and Animation',
    place: 'Sacktoon',
  },
  {
    date: '2018-2022',
    title: 'B.S. in Computer Systems Engineering',
    place: 'Tecnológico de Monterrey',
  },
]

const experience = [
  { date: 'summer 2026', title: 'Camp instructor', place: 'Avid4 Adventure' },
  { date: '2023-2025', title: 'User experience designer', place: 'Oracle' },
  { date: '2022', title: 'UX design intern', place: 'Oracle' },
  { date: '2021-2022', title: 'Full stack developer', place: 'Lawgic' },
]

const software = [
  { label: 'Figma', icon: PanelsTopLeft },
  { label: 'Adobe Photoshop', icon: Scan },
  { label: 'Adobe Illustrator', icon: PenTool },
  { label: 'Python', icon: Braces },
  { label: 'HTML', icon: FileCode2 },
]

function Timeline({ items }) {
  return (
    <div className="grid gap-5 max-[700px]:gap-7">
      {items.map((item) => (
        <div className="grid grid-cols-[7.5rem_1fr] gap-x-5 max-[1150px]:grid-cols-[6.5rem_1fr] max-[700px]:grid-cols-1 max-[700px]:gap-y-1" key={`${item.date}-${item.title}`}>
          <p className="m-0 text-right text-[clamp(0.82rem,0.95vw,1.08rem)] leading-[1.3] max-[700px]:text-left max-[700px]:text-[0.95rem]">
            {item.date}
          </p>
          <div>
            <p className="m-0 text-[clamp(0.88rem,1vw,1.15rem)] font-bold leading-[1.35] max-[700px]:text-base">
              {item.title}
            </p>
            <p className="mt-1 mb-0 text-[clamp(0.82rem,0.95vw,1.08rem)] leading-[1.3] max-[700px]:mt-1.5 max-[700px]:text-[0.95rem]">
              {item.place}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function AboutMe() {
  const { isVisible, ref } = useScrollReveal({ rootMargin: '0px 0px -5% 0px', threshold: 0.08 })
  const reveal = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

  return (
    <section
      ref={ref}
      className="relative isolate min-h-svh overflow-hidden bg-paper px-[3.8%] py-[5.6%] text-ink max-[700px]:px-5 max-[700px]:py-16"
      aria-labelledby="about-me-title"
    >
      <h2
        className={`m-0 max-w-[58rem] text-[clamp(1.6rem,2.12vw,2.55rem)] font-normal leading-[1.22] tracking-[0.025em] transition-[transform,opacity] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${reveal}`}
        id="about-me-title"
      >
        I build <strong>impactful experiences</strong> through thoughtful exploration and{' '}
        <strong>creative problem-solving.</strong>
      </h2>

      <div className="mt-[10.5vh] grid grid-cols-[minmax(18rem,0.92fr)_minmax(27rem,1.15fr)_minmax(26rem,0.98fr)] items-start gap-x-[2.5vw] max-[1150px]:grid-cols-[0.85fr_1.15fr] max-[1150px]:gap-y-16 max-[700px]:mt-12 max-[700px]:grid-cols-1 max-[700px]:gap-y-10">
        <figure
          className={`group m-0 overflow-hidden transition-[transform,opacity] delay-100 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${reveal}`}
        >
          <img
            className="block aspect-square w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            src="/about-me.png"
            alt="Nataly Hernandez wearing glasses and a knit cap, seated and holding a bottle"
          />
        </figure>

        <div
          className={`text-[clamp(0.95rem,1.17vw,1.33rem)] leading-[1.42] tracking-[0.025em] transition-[transform,opacity] delay-200 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${reveal}`}
        >
          <p className="m-0">
            I am <strong>Nataly Hernandez</strong>, a multidisciplinary designer exploring the intersection of data science, design, creativity, and aesthetics.
          </p>
          <p className="mt-6 mb-0">
            Born and raised in Mexico, I’ve always found myself somewhere between my fascination with data and mathematics and my passion for the arts. But one thing has always been clear to me: the combination of the two sides is what’s truly impactful in this world.
          </p>
          <p className="mt-6 mb-0">
            I work across UX design focused on data visualization, graphic design, front end, data science &amp; art direction. With powerful desire to learn from different disciplines, I approach design with attention to detail, flexibility, and intention.
          </p>
        </div>

        <div
          className={`grid gap-9 transition-[transform,opacity] delay-300 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-[1150px]:col-span-2 max-[1150px]:grid-cols-2 max-[700px]:col-span-1 max-[700px]:grid-cols-1 max-[700px]:gap-12 ${reveal}`}
        >
          <div>
            <h3 className="mt-0 mb-5 text-[clamp(0.92rem,1vw,1.15rem)] font-bold lowercase text-accent max-[700px]:mb-7 max-[700px]:text-base">
              education
            </h3>
            <Timeline items={education} />
          </div>
          <div>
            <h3 className="mt-0 mb-5 text-[clamp(0.92rem,1vw,1.15rem)] font-bold lowercase text-accent max-[700px]:mb-7 max-[700px]:text-base">
              experience
            </h3>
            <Timeline items={experience} />
          </div>
        </div>
      </div>

      <div
        className={`mt-[11vh] grid grid-cols-[0.92fr_1.15fr_0.98fr] items-end gap-x-[2.5vw] transition-[transform,opacity] delay-500 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-[1150px]:grid-cols-2 max-[700px]:mt-14 max-[700px]:grid-cols-1 max-[700px]:gap-y-10 ${reveal}`}
      >
        <div>
          <h3 className="m-0 text-[clamp(0.95rem,1.08vw,1.25rem)] font-bold lowercase">contact</h3>
          <a
            className="group mt-3 inline-flex items-center gap-2 text-[clamp(0.9rem,1.08vw,1.25rem)] underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="mailto:natalyhn.8@gmail.com"
          >
            <Mail className="size-[1.15em] stroke-[2.5] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100" aria-hidden="true" />
            natalyhn.8@gmail.com
          </a>
        </div>

        <div className="flex items-end justify-between gap-5 max-[1150px]:justify-start max-[700px]:flex-col max-[700px]:items-start">
          <h3 className="m-0 shrink-0 text-[clamp(0.95rem,1.08vw,1.25rem)] font-bold lowercase">software skills</h3>
          <ul className="m-0 flex list-none gap-1.5 p-0" aria-label="Software skills">
            {software.map(({ label, icon: Icon }) => (
              <li key={label}>
                <span
                  className="group grid size-[2.8rem] place-items-center bg-primary text-paper transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0"
                  title={label}
                >
                  <Icon className="size-7 stroke-[2.3]" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-2 h-4 w-[65%] justify-self-end bg-accent transition-[width] duration-500 hover:w-[80%] motion-reduce:transition-none max-[1150px]:hidden" aria-hidden="true" />
      </div>
    </section>
  )
}

export default AboutMe
